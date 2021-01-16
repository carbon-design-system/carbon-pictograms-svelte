/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FinancialConsultantProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FinancialConsultant extends SvelteComponentTyped<
  FinancialConsultantProps,
  {},
  {}
> {}
