/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface UnauthorizedUserAccessProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class UnauthorizedUserAccess extends SvelteComponentTyped<
  UnauthorizedUserAccessProps,
  {},
  {}
> {}
