/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxPlotProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class BoxPlot extends SvelteComponentTyped<
  BoxPlotProps,
  {},
  {}
> {}
