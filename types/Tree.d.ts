/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TreeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Tree extends SvelteComponentTyped<TreeProps, {}, {}> {}
