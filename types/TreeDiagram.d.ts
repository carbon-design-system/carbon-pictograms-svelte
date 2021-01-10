/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeDiagramProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TreeDiagram extends SvelteComponentTyped<
  TreeDiagramProps,
  {},
  {}
> {}
