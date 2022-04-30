import { toString } from "@carbon/icon-helpers";
import { PictogramOutput } from "@carbon/pictograms";

export function template({ descriptor }: PictogramOutput) {
  return `<script>
  /**
   * Specify the pictogram title.
   * @type {string}
   */
  export let title = undefined;

  $: labelled =  $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  $: attributes = {
    "aria-hidden": labelled ? undefined : true,
    role: labelled ? "img" : undefined,
    focusable: Number($$props["tabindex"]) === 0  ? true : undefined,
  };
</script>

<svg
  preserveAspectRatio="xMidYMid meet"
  xmlns="${descriptor.attrs.xmlns}"
  viewBox="${descriptor.attrs.viewBox}"
  width="${descriptor.attrs.width}"
  height="${descriptor.attrs.height}"
  fill="${descriptor.attrs.fill}"
  {title}
  {...attributes}
  {...$$restProps}>
  ${descriptor.content.map((element) => toString(element)).join("")}
</svg>`;
}
