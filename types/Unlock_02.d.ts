/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Unlock_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Unlock_02 extends SvelteComponentTyped<
  Unlock_02Props,
  {},
  {}
> {}
