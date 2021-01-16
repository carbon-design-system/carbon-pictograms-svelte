/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RelationshipDiagramProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RelationshipDiagram extends SvelteComponentTyped<
  RelationshipDiagramProps,
  {},
  {}
> {}
