/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QQPlotProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class QQPlot extends SvelteComponentTyped<QQPlotProps, {}, {}> {}
