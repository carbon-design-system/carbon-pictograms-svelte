import {
  IconAttributes,
  IconContent,
  defaultAttributes,
  formatAttributes,
  toString
} from "@carbon/icon-helpers";

export interface TemplateProps {
  attrs: IconAttributes;
  content: IconContent;
  moduleName: string;
}

export function template({ attrs, content, moduleName }: TemplateProps) {
  return `<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = ${defaultAttributes.focusable};
  export let title = undefined;
  export let style = undefined;
  export let width = "${attrs.width}";
  export let height = "${attrs.height}";

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
  ${formatAttributes({ ...attrs, preserveAspectRatio: "xMidYMid meet" })
    .split(" ")
    .filter(attr => !attr.startsWith("width") && !attr.startsWith("height"))
    .join(" ")}
  class={className}
  {width}
  {height}
  {style}
  {id}
  {...attributes}>
  ${content
    // @ts-ignore
    .filter(element => element.elem !== "font" && element.elem !== "text")
    .map(element => toString(element))
    .join("")}
  <slot>
    {#if title}
      <title>{title}</title>
    {/if}
  </slot>
</svg>`;
}
