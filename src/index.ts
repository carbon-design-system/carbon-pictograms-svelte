import buildInfo from "@carbon/pictograms/metadata.json" with { type: "json" };
import { $ } from "bun";
import pkg from "../package.json" with { type: "json" };
import { template } from "./template.js";

export const buildPictograms = async () => {
  console.time("Built in");
  await $`rm -rf lib`;
  await $`mkdir lib`;

  let definitions = `import type { Component } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

export type CarbonPictogramProps = SvelteHTMLElements["svg"] & {
  /**
   * Specify the pictogram title.
   * @default undefined
   */
  title?: string;
}\n\n`;

  let libExport = "";

  const pictograms: string[] = [];

  buildInfo.icons.forEach(async ({ output }) => {
    const { moduleName } = output[0];

    pictograms.push(moduleName);

    definitions += `export declare const ${moduleName}: Component<CarbonPictogramProps>;\n`;
    libExport += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;

    const fileName = `lib/${moduleName}.svelte`;

    Bun.write(fileName, template(output[0]));
    Bun.write(
      fileName + ".d.ts",
      `export { ${moduleName} as default } from "./";\n`
    );
  });

  const packageMetadata = `${pictograms.length} pictograms from @carbon/pictograms@${pkg.devDependencies["@carbon/pictograms"]}`;

  await Bun.write(
    "lib/index.d.ts",
    `// Type definitions for ${pkg.name}
// ${packageMetadata}

${definitions}`
  );
  await Bun.write("lib/index.js", libExport);
  await Bun.write(
    "PICTOGRAM_INDEX.md",
    `
# Pictogram Index

> ${packageMetadata}

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
