/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BoxPlotProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BoxPlot extends SvelteComponentTyped<
  BoxPlotProps,
  {},
  {}
> {}
