/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VisualDesignProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class VisualDesign extends SvelteComponentTyped<
  VisualDesignProps,
  {},
  {}
> {}
