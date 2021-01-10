/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IdentityTrustAssessmentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IdentityTrustAssessment extends SvelteComponentTyped<
  IdentityTrustAssessmentProps,
  {},
  {}
> {}
