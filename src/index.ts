import { readFileSync, writeFileSync, removeSync, mkdirSync } from "fs-extra";
import { BuildIcons } from "@carbon/pictograms";
import { template } from "./template";

function build() {
  const source = readFileSync("node_modules/@carbon/pictograms/build-info.json").toString();
  const buildInfo: BuildIcons = JSON.parse(source);
  const metadata = { total: buildInfo.length };

  removeSync("lib");
  mkdirSync("lib");

  const pictograms: string[] = [];
  const imports = buildInfo.map(({ moduleName, descriptor }) => {
    mkdirSync(`lib/${moduleName}`);
    writeFileSync(
      `lib/${moduleName}/${moduleName}.svelte`,
      template({ attrs: descriptor.attrs, content: descriptor.content, moduleName })
    );
    writeFileSync(
      `lib/${moduleName}/index.js`,
      `import ${moduleName} from "./${moduleName}.svelte";
       export { ${moduleName} };
       export default ${moduleName};`
    );

    pictograms.push(moduleName);
    return `export { ${moduleName} } from "./${moduleName}";`;
  });

  writeFileSync("lib/index.js", imports.join(""));
  process.stdout.write(JSON.stringify(metadata, null, 2) + "\n");

  removeSync("docs");
  mkdirSync("docs");

  const docs = [
    "# docs",
    `> ${metadata.total} pictograms total.`,
    "## Usage",
    "```html",
    `<script>
       import ModuleName from "carbon-pictograms-svelte/lib/ModuleName";
     </script>

     <ModuleName />`,
    "```",
    "## List of Pictograms by `ModuleName`",
    pictograms.map(moduleName => `- ${moduleName}`).join("\n")
  ];

  writeFileSync("docs/README.md", docs.join("\n"));
}

build();
