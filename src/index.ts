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
  import Pictogram from "carbon-pictograms-svelte/lib/Pictogram";
</script>

<Pictogram />`,
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
  let definitions = `export interface CarbonPictogramEvents {
  click: MouseEvent,
  mouseover: MouseEvent,
  mouseenter: MouseEvent,
  mouseleave: MouseEvent,
  keyup: KeyboardEvent,
  keydown: KeyboardEvent
}

export declare class CarbonPictogram {
  $$prop_def: {
    /**
     * @type {string} [id]
     */
    id?: string;

    /**
     * @type {string} [class]
     */
    class?: string;

    /**
     * @type {string} [tabindex]
     */
    tabindex?: string;

    /**
     * @type {boolean} [focusable=false]
     */
    focusable?: boolean;

    /**
     * @type {string} [title]
     */
    title?: string;

    /**
     * @type {string} [style]
     */
    style?: string;

    /**
     * @type {string} [fill="#161616"]
     */
    fill?: string;

    /**
     * @type {string} [stroke="currentColor"]
     */
    stroke?: string;

    /**
     * @type {string} [width="48"]
     */
    width?: string;

    /**
     * @type {string} [height="48"]
     */
    height?: string;
  };

  $$slot_def: {
    default?: {};
  };

  $$events_def: CarbonPictogramEvents;

  /**
   * stub $on method from svelte-shims.d.ts
   * https://github.com/sveltejs/language-tools/blob/master/packages/svelte2tsx/svelte-shims.d.ts#L48
   */
  $on<K extends keyof CarbonPictogramEvents>(event: K, handler: (e: CarbonPictogramEvents[K]) => any): void;
}\n\n`;

  buildInfo.icons.forEach(async ({ output }) => {
    const { moduleName } = output[0];
    pictograms.push(moduleName);
    imports += `export { ${moduleName} } from "./${moduleName}";\n`;
    definitions += `export declare class ${moduleName} extends CarbonPictogram {}\n`;

    await mkdir(`lib/${moduleName}`);
    await writeFile(
      `lib/${moduleName}/${moduleName}.svelte`,
      template(output[0])
    );
    await writeFile(
      `lib/${moduleName}/index.js`,
      `import ${moduleName} from "./${moduleName}.svelte";\nexport { ${moduleName} };\nexport default ${moduleName};`
    );
    await writeFile(
      `lib/${moduleName}/index.d.ts`,
      `export { ${moduleName} as default } from "../";\n`
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
