/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StrategyDirectProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class StrategyDirect extends SvelteComponentTyped<
  StrategyDirectProps,
  {},
  {}
> {}
