/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserSearchProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserSearch extends SvelteComponentTyped<
  UserSearchProps,
  {},
  {}
> {}
