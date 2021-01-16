/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartMultiLineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartMultiLine extends SvelteComponentTyped<
  ChartMultiLineProps,
  {},
  {}
> {}
