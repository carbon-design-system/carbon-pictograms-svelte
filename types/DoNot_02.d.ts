/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DoNot_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DoNot_02 extends SvelteComponentTyped<
  DoNot_02Props,
  {},
  {}
> {}
