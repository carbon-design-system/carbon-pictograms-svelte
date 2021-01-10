/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GetAheadOfRiskAndComplianceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GetAheadOfRiskAndCompliance extends SvelteComponentTyped<
  GetAheadOfRiskAndComplianceProps,
  {},
  {}
> {}
