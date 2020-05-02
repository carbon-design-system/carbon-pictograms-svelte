import * as fs from "fs";
import { BuildIcons } from "@carbon/pictograms";
import { performance } from "perf_hooks";
import { promisify } from "util";
import { devDependencies } from "../package.json";
import { template } from "./template";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rmdir = promisify(fs.rmdir);
const mkdir = promisify(fs.mkdir);

(async () => {
  const start = performance.now();
  const source = await readFile("node_modules/@carbon/pictograms/build-info.json");
  const buildInfo: BuildIcons = JSON.parse(source.toString());
  const metadata = { total: buildInfo.length };

  await rmdir("lib", { recursive: true });
  await rmdir("docs", { recursive: true });
  await mkdir("lib");
  await mkdir("docs");

  const pictograms: string[] = [];
  const imports: string[] = [];

  buildInfo.forEach(async ({ moduleName, descriptor }) => {
    pictograms.push(moduleName);
    imports.push(`export { ${moduleName} } from "./${moduleName}";\n`);

    await mkdir(`lib/${moduleName}`);
    await writeFile(
      `lib/${moduleName}/${moduleName}.svelte`,
      template({ attrs: descriptor.attrs, content: descriptor.content, moduleName })
    );
    await writeFile(
      `lib/${moduleName}/index.js`,
      `import ${moduleName} from "./${moduleName}.svelte";\nexport { ${moduleName} };\nexport default ${moduleName};`
    );
  });

  await writeFile("lib/index.js", imports.join(""));
  await writeFile(
    "docs/README.md",
    [
      "# docs",
      `> ${metadata.total} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}.`,
      "## Usage",
      "```html",
      `<script>
       import ModuleName from "carbon-pictograms-svelte/lib/ModuleName";
     </script>

     <ModuleName />`,
      "```",
      "## List of Pictograms by `ModuleName`",
      pictograms.map(moduleName => `- ${moduleName}`).join("\n")
    ].join("\n")
  );

  const bench = (performance.now() - start) / 1000;
  console.log(`Built ${pictograms.length} pictograms in ${bench.toFixed(2)}s.`);
})();
