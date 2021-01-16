/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PartnerRelationshipProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PartnerRelationship extends SvelteComponentTyped<
  PartnerRelationshipProps,
  {},
  {}
> {}
