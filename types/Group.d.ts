/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GroupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Group extends SvelteComponentTyped<GroupProps, {}, {}> {}
