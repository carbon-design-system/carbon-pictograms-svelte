import { defaultAttributes, toString, Descriptor } from "@carbon/icon-helpers";
import { PictogramOutput } from "@carbon/pictograms";

export function template(output: PictogramOutput) {
  const { moduleName, descriptor } = output;

  return `<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = ${defaultAttributes.focusable};
  export let title = undefined;
  export let style = undefined;
  export let fill = "#161616";
  export let stroke = "currentColor";
  export let width = "${descriptor.attrs.width}";
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
    // @ts-ignore
    .filter((element) => element.elem !== "font" && element.elem !== "text")
    .map((element) => toString(element as Descriptor))
    .join("")}
  <slot>{#if title}<title>{title}</title>{/if}</slot>
</svg>`;
}
