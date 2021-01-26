/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KeyboardProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Keyboard extends SvelteComponentTyped<
  KeyboardProps,
  {},
  {}
> {}
