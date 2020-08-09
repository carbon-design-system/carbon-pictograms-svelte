import * as fs from "fs";
import { BuildIcons } from "@carbon/pictograms";
import { performance } from "perf_hooks";
import { promisify } from "util";
import { name, devDependencies } from "../package.json";
import { template } from "./template";

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const rmdir = promisify(fs.rmdir);
const mkdir = promisify(fs.mkdir);

const usage = [
  "```html",
  `<script>
  import ModuleName from "carbon-pictograms-svelte/lib/ModuleName";
</script>

<ModuleName />`,
  "```",
];

(async () => {
  const start = performance.now();
  const source = await readFile(
    "node_modules/@carbon/pictograms/metadata.json",
    "utf8"
  );
  const buildInfo: BuildIcons = JSON.parse(source);

  await rmdir("lib", { recursive: true });
  await mkdir("lib");

  const pictograms: string[] = [];
  let imports = "";
  let definitions = `declare class Pictogram {
  $$prop_def: {
    /** @type {string} [id] */
    id?: string;

    /** @type {string} [class] */
    class?: string;

    /** @type {string} [tabindex] */
    tabindex?: string;

    /** @type {boolean} [focusable] */
    focusable?: boolean;

    /** @type {string} [title] */
    title?: string;

    /** @type {string} [style] */
    style?: string;

    /**
     * Fill color
     * @type {string} [fill="#161616"]
     */
    fill?: string;

    /**
     * Stroke color
     * @type {string} [stroke="currentColor"]
     */
    stroke?: string;

    /** @type {string} [width="48"] */
    width?: string;

    /** @type {string} [height="48"] */
    height?: string;
  };

  $$slot_def: {
    /** @type {{}} [default] */
    default?: {};
  };

  /** stub 'on:event' directive as any */
  $on(eventname: string, handler: (e: Event) => any): () => void;
}
`;

  buildInfo.icons.forEach(async ({ output }) => {
    const { moduleName } = output[0];
    pictograms.push(moduleName);
    imports += `export { ${moduleName} } from "./${moduleName}";\n`;
    definitions += `declare module "carbon-pictograms-svelte/lib/${moduleName}" { export default class ${moduleName} extends Pictogram {} }\n`;

    await mkdir(`lib/${moduleName}`);
    await writeFile(
      `lib/${moduleName}/${moduleName}.svelte`,
      template(output[0])
    );
    await writeFile(
      `lib/${moduleName}/index.js`,
      `import ${moduleName} from "./${moduleName}.svelte";\nexport { ${moduleName} };\nexport default ${moduleName};`
    );
  });

  const metadata = `${pictograms.length} pictograms from @carbon/pictograms@${devDependencies["@carbon/pictograms"]}`;

  await writeFile(
    "lib/index.d.ts",
    `// Type definitions for ${name}
// ${metadata}

${definitions}`
  );
  await writeFile("lib/index.js", imports);
  await writeFile(
    "PICTOGRAM_INDEX.md",
    `
# Pictogram Index

> ${metadata}

## Usage

${usage.join("\n")}

## List of Pictograms by \`ModuleName\`

${pictograms.map((moduleName) => `- ${moduleName}`).join("\n")}
    `.trim() + "\n"
  );

  const bench = (performance.now() - start) / 1000;
  console.log(`Built ${pictograms.length} pictograms in ${bench.toFixed(2)}s.`);
})();
