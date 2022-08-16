import fsp from "fs/promises";
import type { BuildIcons } from "@carbon/pictograms";
import buildInfo from "@carbon/pictograms/metadata.json";
import { ComponentParser } from "sveld";
import writeTsDefinitions from "sveld/lib/writer/writer-ts-definitions";
import type { ParsedExports } from "sveld/lib/parse-exports";
import { name, devDependencies } from "../package.json";
import { template } from "./template";

export const buildPictograms = async () => {
  console.time("Built in");
  await fsp.rm("lib", { recursive: true, force: true });
  await fsp.mkdir("lib");

  const parser = new ComponentParser();
  const components = new Map();
  const exports: ParsedExports = {};

  let imports = "";

  const pictograms: string[] = [];

  (buildInfo as BuildIcons).icons.forEach(async ({ output }) => {
    const { moduleName } = output[0];

    imports += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;
    pictograms.push(moduleName);

    const source = template(output[0]);
    const ts_file_path = `./${moduleName}.svelte.d.ts`;

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

    await fsp.writeFile(`lib/${moduleName}.svelte`, source);
  });

  const metadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  writeTsDefinitions(components, {
    preamble: `// Type definitions for ${name}\n// ${metadata}\n\n`,
    exports,
    inputDir: "lib",
    outDir: "lib",
  });

  await fsp.writeFile("lib/index.js", imports);
  await fsp.writeFile(
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

  console.timeEnd("Built in");
  return pictograms;
};
