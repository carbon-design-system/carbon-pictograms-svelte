/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Networking_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Networking_01 extends SvelteComponentTyped<
  Networking_01Props,
  {},
  {}
> {}
