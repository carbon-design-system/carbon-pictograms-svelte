import buildInfo from "@carbon/pictograms/metadata.json" with { type: "json" };
import { createHash } from "node:crypto";
import { mkdir, readdir, unlink } from "node:fs/promises";
import { $ } from "bun";
import pkg from "../package.json" with { type: "json" };
import { template, templateSvg } from "./template.js";

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
  const byModuleName: Record<string, string> = {};
  const writePromises: Promise<void>[] = [];

  for (const { output } of buildInfo.icons) {
    const pictogramOutput = output[0];
    const { moduleName } = pictogramOutput;

    pictograms.push(moduleName);
    byModuleName[moduleName] = templateSvg(pictogramOutput);

    definitions += `export declare const ${moduleName}: Component<CarbonPictogramProps>;\n`;
    libExport += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;

    const fileName = `lib/${moduleName}.svelte`;

    writePromises.push(
      Bun.write(fileName, template(pictogramOutput)),
      Bun.write(
        fileName + ".d.ts",
        `export { ${moduleName} as default } from "./";\n`
      )
    );
  }

  await Promise.all(writePromises);

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

  const order = [...pictograms].sort((a, b) => a.localeCompare(b));
  const buildInfoPayload = {
    total: pictograms.length,
    order,
    byModuleName,
  };
  const buildInfoContent = JSON.stringify(buildInfoPayload);
  const buildInfoHash = createHash("sha256")
    .update(buildInfoContent)
    .digest("hex")
    .slice(0, 12);
  const buildInfoFileName = `build-info.${buildInfoHash}.json`;
  const docsPublicDir = "docs/public";
  const docsGeneratedDir = "docs/src/generated";

  await mkdir(docsPublicDir, { recursive: true });
  await mkdir(docsGeneratedDir, { recursive: true });

  for (const file of await readdir(docsPublicDir)) {
    if (
      file === "build-info.json" ||
      (file.startsWith("build-info.") && file.endsWith(".json"))
    ) {
      await unlink(`${docsPublicDir}/${file}`);
    }
  }

  await Bun.write(`${docsPublicDir}/${buildInfoFileName}`, buildInfoContent);
  await Bun.write(
    "docs/src/generated/build-info-url.ts",
    `// @generated
// This file was automatically generated and should not be edited.
// @see src/index.ts

export const BUILD_INFO_URL = "/${buildInfoFileName}";
`
  );

  console.timeEnd("Built in");
  return pictograms;
};
