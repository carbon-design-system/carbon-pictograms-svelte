/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AmericasProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Americas extends SvelteComponentTyped<
  AmericasProps,
  {},
  {}
> {}
