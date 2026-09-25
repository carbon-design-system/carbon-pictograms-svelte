import metadata_latest from "@carbon/pictograms/metadata.json" with { type: "json" };
import { createHash } from "node:crypto";
import { mkdir, readdir, rm, unlink } from "node:fs/promises";
import pkg from "../package.json" with { type: "json" };
import { renderContent, template, templateSvg } from "./template.js";

type MetadataSource = typeof metadata_latest;

/**
 * This library is built using the `@carbon/pictograms` package.
 * However, `@carbon/pictograms` may remove pictograms between minor versions.
 * This library has a different contract; pictograms are not removed
 * in minor versions. To ensure that pictograms are not removed, we
 * maintain a list of deprecated pictograms that are merged in.
 */
const DEPRECATED_PICTOGRAMS: Record<string, MetadataSource> = {
  // Pin the last @carbon/pictograms version that still contains a deleted pictogram.
};

/**
 * Similarly, `@carbon/pictograms` may rename pictograms between minor versions.
 * Maintain a list of renamed pictograms that are merged in and a mapping of
 * the old export name to the new export name.
 */
const RENAMED_PICTOGRAMS = {
  // From 12.83.x
  ExpandHorz: "ExpandHorizontal",
  ExpandVert: "ExpandVertical",
} as const;

const templateAlias = (moduleName: string) => `<script>
  import ${moduleName} from "./${moduleName}.svelte";

  export let title = undefined;
</script>

<${moduleName} {title} {...$$restProps} />`;

/** Old and new module names that differ only by case share one path on case-insensitive filesystems. */
const collidesOnCaseInsensitiveFs = (a: string, b: string) =>
  a.toLowerCase() === b.toLowerCase();

export const assertRenameAliasTarget = (
  oldName: string,
  newName: string,
  byModuleName: Record<string, string>
) => {
  if (!byModuleName[newName]) {
    throw new Error(`Rename alias target missing: ${newName} for ${oldName}`);
  }
};

const metadata = {
  ...metadata_latest,
  icons: [...metadata_latest.icons],
};

Object.entries(DEPRECATED_PICTOGRAMS).forEach(
  ([pictogramName, sourceMetadata]) => {
    sourceMetadata.icons.forEach((icon) => {
      if (icon.output[0].moduleName === pictogramName) {
        metadata.icons.push(icon);
      }
    });
  }
);

/**
 * Writes `files` to `dir`, removing any existing entries not in `files`.
 * Overwriting in place is much faster than wiping and recreating the
 * directory's thousands of files. Stale entries are removed before
 * writing so that a case-only rename is not clobbered on
 * case-insensitive filesystems.
 */
const syncDir = async (dir: string, files: Map<string, string>) => {
  await mkdir(dir, { recursive: true });

  await Promise.all(
    (await readdir(dir))
      .filter((file) => !files.has(file))
      .map((file) => rm(`${dir}/${file}`, { recursive: true, force: true }))
  );

  await Promise.all(
    Array.from(files, ([file, content]) => Bun.write(`${dir}/${file}`, content))
  );
};

export const buildPictograms = async () => {
  console.time("Built in");

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
  const libFiles = new Map<string, string>();

  for (const { output } of metadata.icons) {
    const pictogramOutput = output[0];
    const { moduleName } = pictogramOutput;

    const inner = renderContent(pictogramOutput.descriptor);

    pictograms.push(moduleName);
    byModuleName[moduleName] = templateSvg(pictogramOutput, inner);

    definitions += `export declare const ${moduleName}: Component<CarbonPictogramProps>;\n`;
    libExport += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;

    const fileName = `${moduleName}.svelte`;

    libFiles.set(fileName, template(pictogramOutput, inner));
    libFiles.set(
      fileName + ".d.ts",
      `export { ${moduleName} as default } from "./";\n`
    );
  }

  Object.entries(RENAMED_PICTOGRAMS).forEach(([oldName, newName]) => {
    assertRenameAliasTarget(oldName, newName, byModuleName);

    definitions += `export declare const ${oldName}: Component<CarbonPictogramProps>;\n`;

    if (collidesOnCaseInsensitiveFs(oldName, newName)) {
      libExport += `export { default as ${oldName} } from "./${newName}.svelte";\n`;
      return;
    }

    libExport += `export { default as ${oldName} } from "./${oldName}.svelte";\n`;

    const fileName = `${oldName}.svelte`;

    libFiles.set(fileName, templateAlias(newName));
    libFiles.set(
      fileName + ".d.ts",
      `export { default } from "./${newName}.svelte";\n`
    );
  });

  const packageMetadata = `${pictograms.length} pictograms from @carbon/pictograms@${pkg.devDependencies["@carbon/pictograms"]}`;

  libFiles.set(
    "index.d.ts",
    `// Type definitions for ${pkg.name}
// ${packageMetadata}

${definitions}`
  );
  libFiles.set("index.js", libExport);

  await syncDir("lib", libFiles);

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
  const buildInfoPayload: Record<string, unknown> = {
    total: pictograms.length,
    order,
    byModuleName,
  };

  if (Object.keys(RENAMED_PICTOGRAMS).length > 0) {
    buildInfoPayload.renamedPictograms = RENAMED_PICTOGRAMS;
  }

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

  const aliasNames = Object.keys(RENAMED_PICTOGRAMS);

  return [...pictograms, ...aliasNames];
};
