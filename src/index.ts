import buildInfo from "@carbon/pictograms/metadata.json" assert { type: "json" };
import { $ } from "bun";
import { ComponentParser } from "sveld";
import type { ParsedExports } from "sveld/lib/parse-exports";
import writeTsDefinitions from "sveld/lib/writer/writer-ts-definitions";
import { devDependencies, name } from "../package.json" assert { type: "json" };
import { template } from "./template";

export const buildPictograms = async () => {
  console.time("Built in");
  await $`rm -rf lib`;
  await $`mkdir lib`;

  const parser = new ComponentParser();
  const components = new Map();
  const exports: ParsedExports = {};

  let imports = "";

  const pictograms: string[] = [];

  buildInfo.icons.forEach(async ({ output }) => {
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

    await Bun.write(`lib/${moduleName}.svelte`, source);
  });

  const metadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  await writeTsDefinitions(components, {
    preamble: `// Type definitions for ${name}\n// ${metadata}\n\n`,
    exports,
    inputDir: "lib",
    outDir: "lib",
  });

  await Bun.write("lib/index.js", imports);
  await Bun.write(
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
