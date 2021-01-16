/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AnonymousUsersProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AnonymousUsers extends SvelteComponentTyped<
  AnonymousUsersProps,
  {},
  {}
> {}
