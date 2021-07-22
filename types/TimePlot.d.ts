/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TimePlotProps
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

export default class TimePlot extends SvelteComponentTyped<
  TimePlotProps,
  {},
  {}
> {}
