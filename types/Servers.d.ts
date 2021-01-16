/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ServersProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Servers extends SvelteComponentTyped<
  ServersProps,
  {},
  {}
> {}
