/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TokyoTempleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TokyoTemple extends SvelteComponentTyped<
  TokyoTempleProps,
  {},
  {}
> {}
