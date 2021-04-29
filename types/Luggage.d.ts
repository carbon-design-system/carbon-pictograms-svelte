/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LuggageProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Luggage extends SvelteComponentTyped<
  LuggageProps,
  {},
  {}
> {}
