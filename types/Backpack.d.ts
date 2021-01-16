/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BackpackProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Backpack extends SvelteComponentTyped<
  BackpackProps,
  {},
  {}
> {}
