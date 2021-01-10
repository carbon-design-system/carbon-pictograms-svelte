/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConnectProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Connect extends SvelteComponentTyped<
  ConnectProps,
  {},
  {}
> {}
