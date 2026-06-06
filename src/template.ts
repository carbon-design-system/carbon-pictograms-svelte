import { formatAttributes, toString } from "@carbon/icon-helpers";
import { PictogramOutput } from "@carbon/pictograms";

const compactSvg = (svg: string) =>
  svg.replace(/\s+/g, " ").replace(/> </g, "><").trim();

const omitDuplicateSvgAttrs = ({
  xmlns,
  fill,
  ...rest
}: Record<string, string | number>) => rest;

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
  ${descriptor.content.map(toString).join("")}
</svg>`;
}

export const templateSvg = ({ descriptor }: PictogramOutput) => {
  const attrs = omitDuplicateSvgAttrs(descriptor?.attrs ?? {});
  const content = descriptor?.content ?? [];
  const formatted = formatAttributes({
    ...attrs,
    preserveAspectRatio: "xMidYMid meet",
  });
  const inner = content.map(toString).join("");

  return compactSvg(
    `<svg xmlns="http://www.w3.org/2000/svg" ${formatted} fill="currentColor">${inner}</svg>`
  );
};
