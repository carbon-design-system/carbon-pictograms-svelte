/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class Tree extends SvelteComponentTyped<TreeProps, {}, {}> {}
