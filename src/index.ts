import metadata_latest from "@carbon/pictograms/metadata.json" assert { type: "json" };
import { $ } from "bun";
import { ComponentParser } from "sveld";
import type { ParsedExports } from "sveld/lib/parse-exports";
import writeTsDefinitions from "sveld/lib/writer/writer-ts-definitions";
import { devDependencies, name } from "../package.json" assert { type: "json" };
import { template } from "./template";

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

export const buildPictograms = async () => {
  console.time("Built in");
  await $`rm -rf lib`;
  await $`mkdir lib`;

  const parser = new ComponentParser();
  const components = new Map();
  const exports: ParsedExports = {};

  let imports = "";

  const pictograms: string[] = [];
  const byModuleName: Record<string, string> = {};
  const writePromises: Promise<unknown>[] = [];

  for (const { output } of metadata.icons) {
    const { moduleName } = output[0];

    imports += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;
    pictograms.push(moduleName);
    byModuleName[moduleName] = moduleName;

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

    writePromises.push(Bun.write(`lib/${moduleName}.svelte`, source));
  }

  Object.entries(RENAMED_PICTOGRAMS).forEach(([oldName, newName]) => {
    assertRenameAliasTarget(oldName, newName, byModuleName);

    if (collidesOnCaseInsensitiveFs(oldName, newName)) {
      imports += `export { default as ${oldName} } from "./${newName}.svelte";\n`;
      exports[oldName] = {
        source: `./${newName}.svelte`,
        default: false,
      };
      return;
    }

    imports += `export { default as ${oldName} } from "./${oldName}.svelte";\n`;

    const source = templateAlias(newName);
    const ts_file_path = `./${oldName}.svelte.d.ts`;
    const fileName = `lib/${oldName}.svelte`;

    components.set(oldName, {
      moduleName: oldName,
      filePath: ts_file_path,
      ...parser.parseSvelteComponent(source, {
        moduleName: oldName,
        filePath: ts_file_path,
      }),
    });

    exports[oldName] = {
      source: `./${oldName}.svelte`,
      default: false,
    };

    writePromises.push(Bun.write(fileName, source));
  });

  await Promise.all(writePromises);

  const packageMetadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  await writeTsDefinitions(components, {
    preamble: `// Type definitions for ${name}\n// ${packageMetadata}\n\n`,
    exports,
    inputDir: "lib",
    outDir: "lib",
  });

  await Promise.all(
    Object.entries(RENAMED_PICTOGRAMS)
      .filter(
        ([oldName, newName]) => !collidesOnCaseInsensitiveFs(oldName, newName)
      )
      .map(([oldName, newName]) =>
        Bun.write(
          `lib/${oldName}.svelte.d.ts`,
          `export { default } from "./${newName}.svelte";\n`
        )
      )
  );

  await Bun.write("lib/index.js", imports);
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

  const aliasNames = Object.keys(RENAMED_PICTOGRAMS);

  return [...pictograms, ...aliasNames];
};
