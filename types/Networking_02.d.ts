/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Networking_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Networking_02 extends SvelteComponentTyped<
  Networking_02Props,
  {},
  {}
> {}
