/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserProfileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserProfile extends SvelteComponentTyped<
  UserProfileProps,
  {},
  {}
> {}
