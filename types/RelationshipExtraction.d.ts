/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RelationshipExtractionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RelationshipExtraction extends SvelteComponentTyped<
  RelationshipExtractionProps,
  {},
  {}
> {}
