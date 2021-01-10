/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartLineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartLine extends SvelteComponentTyped<
  ChartLineProps,
  {},
  {}
> {}
