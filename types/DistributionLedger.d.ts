/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DistributionLedgerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DistributionLedger extends SvelteComponentTyped<
  DistributionLedgerProps,
  {},
  {}
> {}
