/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TagsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Tags extends SvelteComponentTyped<TagsProps, {}, {}> {}
