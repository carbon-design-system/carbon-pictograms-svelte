/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TelevisionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Television extends SvelteComponentTyped<
  TelevisionProps,
  {},
  {}
> {}
