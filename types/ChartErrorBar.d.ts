/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartErrorBarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartErrorBar extends SvelteComponentTyped<
  ChartErrorBarProps,
  {},
  {}
> {}
