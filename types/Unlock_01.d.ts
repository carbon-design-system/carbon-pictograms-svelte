/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Unlock_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Unlock_01 extends SvelteComponentTyped<
  Unlock_01Props,
  {},
  {}
> {}
