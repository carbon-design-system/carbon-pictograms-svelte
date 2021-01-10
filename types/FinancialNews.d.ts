/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FinancialNewsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FinancialNews extends SvelteComponentTyped<
  FinancialNewsProps,
  {},
  {}
> {}
