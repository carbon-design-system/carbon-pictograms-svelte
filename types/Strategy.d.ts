/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StrategyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Strategy extends SvelteComponentTyped<
  StrategyProps,
  {},
  {}
> {}
