/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartHighLowProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartHighLow extends SvelteComponentTyped<
  ChartHighLowProps,
  {},
  {}
> {}
