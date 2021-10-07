/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagsProps
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

export default class Tags extends SvelteComponentTyped<TagsProps, {}, {}> {}
