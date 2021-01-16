/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface Lock_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Lock_02 extends SvelteComponentTyped<
  Lock_02Props,
  {},
  {}
> {}
