/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartTSneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartTSne extends SvelteComponentTyped<
  ChartTSneProps,
  {},
  {}
> {}
