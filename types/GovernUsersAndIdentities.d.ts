/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GovernUsersAndIdentitiesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GovernUsersAndIdentities extends SvelteComponentTyped<
  GovernUsersAndIdentitiesProps,
  {},
  {}
> {}
