import * as fs from "fs";
import { BuildIcons } from "@carbon/pictograms";
import { performance } from "perf_hooks";
import { promisify } from "util";
import { name, devDependencies } from "../package.json";
import { template } from "./template";
import { ComponentParser } from "sveld";
import writeTsDefinitions from "sveld/lib/writer/writer-ts-definitions";
import { ParsedExports } from "sveld/lib/parse-exports";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rmdir = promisify(fs.rmdir);
const mkdir = promisify(fs.mkdir);

(async () => {
  const start = performance.now();
  const source = await readFile(
    "node_modules/@carbon/pictograms/metadata.json",
    "utf-8"
  );
  const buildInfo: BuildIcons = JSON.parse(source);

  await rmdir("types", { recursive: true });
  await rmdir("lib", { recursive: true });
  await mkdir("lib");

  const parser = new ComponentParser();
  const components = new Map();
  const exports: ParsedExports = {};

  let imports = "";

  const pictograms = buildInfo.icons.map(async ({ output }) => {
    const { moduleName } = output[0];

    imports += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;

    const source = template(output[0]);
    const ts_file_path = `./${moduleName}.d.ts`;

    components.set(moduleName, {
      moduleName,
      filePath: ts_file_path,
      ...parser.parseSvelteComponent(source, {
        moduleName,
        filePath: ts_file_path,
      }),
    });

    exports[moduleName] = {
      source: `./${moduleName}.svelte`,
      default: false,
    };

    await writeFile(`lib/${moduleName}.svelte`, source);

    return moduleName;
  });

  const metadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  writeTsDefinitions(components, {
    preamble: `// Type definitions for ${name}\n// ${metadata}\n\n`,
    exports,
    inputDir: "lib",
    outDir: "types",
  });

  await writeFile("lib/index.js", imports);
  await writeFile(
    "PICTOGRAM_INDEX.md",
    `
# Pictogram Index

> ${metadata}

## Usage

\`\`\`svelte
<script>
  import Pictogram from "carbon-pictograms-svelte/lib/Pictogram.svelte";
</script>

<Pictogram />
\`\`\`

## List of Pictograms by \`ModuleName\`

${pictograms.map((moduleName) => `- ${moduleName}`).join("\n")}
    `.trim() + "\n"
  );

  const bench = (performance.now() - start) / 1000;
  console.log(`Built ${pictograms.length} pictograms in ${bench.toFixed(2)}s.`);
})();
