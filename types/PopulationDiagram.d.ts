/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PopulationDiagramProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PopulationDiagram extends SvelteComponentTyped<
  PopulationDiagramProps,
  {},
  {}
> {}
