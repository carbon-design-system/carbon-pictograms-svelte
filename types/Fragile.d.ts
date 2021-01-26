/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FragileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Fragile extends SvelteComponentTyped<
  FragileProps,
  {},
  {}
> {}
