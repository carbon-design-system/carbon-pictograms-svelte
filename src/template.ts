import { defaultAttributes, toString } from "@carbon/icon-helpers";
import { PictogramOutput } from "@carbon/pictograms";

export function template(output: PictogramOutput) {
  const { moduleName, descriptor } = output;

  return `<script>
  let className = undefined;

  /**
   * @type {string} [class]
   */
  export { className as class };

  /**
   * @type {string} [id]
   */
  export let id = undefined;

  /**
   * @type {string} [tabindex]
   */
  export let tabindex = undefined;

  /**
   * @type {boolean} [focusable=false]
   */
  export let focusable = ${defaultAttributes.focusable};

  /**
   * @type {string} [title]
   */
  export let title = undefined;

  /**
   * @type {string} [style]
   */
  export let style = undefined;

  /**
   * @type {string} [fill="#161616"]
   */
  export let fill = "#161616";

  /**
   * @type {string} [stroke="currentColor"]
   */
  export let stroke = "currentColor";

  /**
   * @type {string} [width="48"]
   */
  export let width = "${descriptor.attrs.width}";

  /**
   * @type {string} [height="48"]
   */
  export let height = "${descriptor.attrs.height}";

  $: ariaLabel = $$props['aria-label'];
  $: ariaLabelledBy = $$props['aria-labelledby'];
  $: labelled = ariaLabel || ariaLabelledBy || title;
  $: attributes = {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    'aria-hidden': labelled ? undefined : true,
    role: labelled ? 'img' : undefined,
    focusable: tabindex === '0' ? true : focusable,
    tabindex
  };
</script>

<svg
  data-carbon-pictogram="${moduleName}"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="${descriptor.attrs.xmlns}"
  viewBox="${descriptor.attrs.viewBox}"
  preserveAspectRatio="xMidYMid meet"
  class={className}
  {fill}
  {stroke}
  {width}
  {height}
  {style}
  {id}
  {...attributes}>
  ${descriptor.content
    .filter((element) => element.elem !== "font" && element.elem !== "text")
    .map((element) => toString(element))
    .join("")}
  <slot>{#if title}<title>{title}</title>{/if}</slot>
</svg>`;
}
