/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FinancialGainProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FinancialGain extends SvelteComponentTyped<
  FinancialGainProps,
  {},
  {}
> {}
