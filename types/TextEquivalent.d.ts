/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextEquivalentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TextEquivalent extends SvelteComponentTyped<
  TextEquivalentProps,
  {},
  {}
> {}
