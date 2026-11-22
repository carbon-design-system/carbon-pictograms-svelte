import metadata_latest from "@carbon/pictograms/metadata.json" assert { type: "json" };
import { $ } from "bun";
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

/**
 * Every pictogram has the same type, so the barrel declares one class per
 * pictogram that extends `CarbonPictogram`, and the `./lib/*.svelte` export
 * points deep imports at a single `pictogram.d.ts` instead of a
 * `.svelte.d.ts` per pictogram.
 */
const definitionsPreamble = `import { SvelteComponentTyped } from "svelte";
import type { SvelteHTMLElements } from "svelte/elements";

type $RestProps = SvelteHTMLElements["svg"];

type $Props = {
  /**
   * Specify the pictogram title.
   * @default undefined
   */
  title?: string;

  [key: \`data-\${string}\`]: any;
};

export type CarbonPictogramProps = Omit<$RestProps, keyof $Props> & $Props;

export declare class CarbonPictogram extends SvelteComponentTyped<
  CarbonPictogramProps,
  Record<string, any>,
  Record<string, never>
> {}
`;

/** Each pictogram's class, plus the \`<Name>Props\` alias earlier versions exported. */
const declarePictogram = (moduleName: string) =>
  `export declare class ${moduleName} extends CarbonPictogram {}\nexport type ${moduleName}Props = CarbonPictogramProps;\n`;

export const buildPictograms = async () => {
  console.time("Built in");
  await $`rm -rf lib`;
  await $`mkdir lib`;

  let imports = "";
  let definitions = "";

  const pictograms: string[] = [];
  const byModuleName: Record<string, string> = {};
  const writePromises: Promise<unknown>[] = [];

  for (const { output } of metadata.icons) {
    const { moduleName } = output[0];

    imports += `export { default as ${moduleName} } from "./${moduleName}.svelte";\n`;
    pictograms.push(moduleName);
    byModuleName[moduleName] = moduleName;

    definitions += declarePictogram(moduleName);

    writePromises.push(Bun.write(`lib/${moduleName}.svelte`, template(output[0])));
  }

  Object.entries(RENAMED_PICTOGRAMS).forEach(([oldName, newName]) => {
    assertRenameAliasTarget(oldName, newName, byModuleName);

    definitions += declarePictogram(oldName);

    if (collidesOnCaseInsensitiveFs(oldName, newName)) {
      imports += `export { default as ${oldName} } from "./${newName}.svelte";\n`;
      return;
    }

    imports += `export { default as ${oldName} } from "./${oldName}.svelte";\n`;

    writePromises.push(Bun.write(`lib/${oldName}.svelte`, templateAlias(newName)));
  });

  await Promise.all(writePromises);

  const packageMetadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  await Bun.write(
    "lib/index.d.ts",
    `// Type definitions for ${name}\n// ${packageMetadata}\n\n${definitionsPreamble}\n${definitions}`
  );

  await Bun.write(
    "lib/pictogram.d.ts",
    `import type { ${pictograms[0]} } from "./index.js";

declare const _default: typeof ${pictograms[0]};
export default _default;
`
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
