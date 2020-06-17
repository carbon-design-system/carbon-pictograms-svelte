import { strict as test } from "assert";
import { template } from "./template";
import { PictogramOutput } from "@carbon/pictograms";

const props: PictogramOutput = {
  moduleName: "Airplane",
  filepath: "airplane/index.js",
  descriptor: {
    elem: "svg",
    attrs: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 48 48",
      width: "48",
      height: "48",
    },
    content: [
      {
        elem: "path",
        attrs: {
          fill: "none",
          "stroke-linejoin": "round",
          "stroke-miterlimit": "10",
          "stroke-width": ".72",
          d:
            "M22,13.169C22,11.762,22.592,9,24,9s2,2.762,2,4.169v5.342L37,27v4.5l-10.995-6.22L26,33.5l4,3.5v2l-6-2l-6,2v-2l4-3.5V13.169z M29,20.923V18 M32,23.335V20 M19,18v2.873L11,27v4.5l9-5.195 M16,23.175V20",
        },
      },
    ],
    name: "airplane",
  },
};

const expected = `<script>
  let className = undefined;
  export { className as class };
  export let id = undefined;
  export let tabindex = undefined;
  export let focusable = false;
  export let title = undefined;
  export let style = undefined;
  export let fill = "#161616";
  export let stroke = "currentColor";
  export let width = "48";
  export let height = "48";

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
  data-carbon-pictogram="Airplane"
  on:click
  on:mouseover
  on:mouseenter
  on:mouseleave
  on:keyup
  on:keydown
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 48 48"
  preserveAspectRatio="xMidYMid meet"
  class={className}
  {fill}
  {stroke}
  {width}
  {height}
  {style}
  {id}
  {...attributes}>
  <path fill="none" stroke-linejoin="round" stroke-miterlimit="10" stroke-width=".72" d="M22,13.169C22,11.762,22.592,9,24,9s2,2.762,2,4.169v5.342L37,27v4.5l-10.995-6.22L26,33.5l4,3.5v2l-6-2l-6,2v-2l4-3.5V13.169z M29,20.923V18 M32,23.335V20 M19,18v2.873L11,27v4.5l9-5.195 M16,23.175V20"></path>
  <slot>{#if title}<title>{title}</title>{/if}</slot>
</svg>`;

test.equal(template(props), expected);
