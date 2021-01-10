import { toString } from "@carbon/icon-helpers";
import { PictogramOutput } from "@carbon/pictograms";

export function template({ descriptor }: PictogramOutput) {
  return `<script>
  /**
   * @type {string}
   */
  export let tabindex = undefined;

  /**
   * @type {string}
   */
  export let fill = "${descriptor.attrs.fill}";

  $: labelled =  $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  $: attributes = {
    "aria-hidden": labelled ? undefined : true,
    role: labelled ? "img" : undefined,
    focusable: tabindex === "0" ? true : undefined,
    tabindex
  };
</script>

<svg
  preserveAspectRatio="xMidYMid meet"
  xmlns="${descriptor.attrs.xmlns}"
  viewBox="${descriptor.attrs.viewBox}"
  width="${descriptor.attrs.width}"
  height="${descriptor.attrs.height}"
  {fill}
  {...attributes}
  {...$$restProps}>
  ${descriptor.content.map((element) => toString(element)).join("")}
</svg>`;
}
