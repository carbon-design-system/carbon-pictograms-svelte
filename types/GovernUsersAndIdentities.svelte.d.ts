/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GovernUsersAndIdentitiesProps
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

export default class GovernUsersAndIdentities extends SvelteComponentTyped<
  GovernUsersAndIdentitiesProps,
  {},
  {}
> {}
