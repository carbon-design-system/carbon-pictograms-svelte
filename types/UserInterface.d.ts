/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UserInterfaceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UserInterface extends SvelteComponentTyped<
  UserInterfaceProps,
  {},
  {}
> {}
