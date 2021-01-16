/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FinanceStrategyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FinanceStrategy extends SvelteComponentTyped<
  FinanceStrategyProps,
  {},
  {}
> {}
