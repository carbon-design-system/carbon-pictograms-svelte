/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartPieProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartPie extends SvelteComponentTyped<
  ChartPieProps,
  {},
  {}
> {}
