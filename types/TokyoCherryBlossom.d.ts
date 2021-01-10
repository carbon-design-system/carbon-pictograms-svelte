/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TokyoCherryBlossomProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TokyoCherryBlossom extends SvelteComponentTyped<
  TokyoCherryBlossomProps,
  {},
  {}
> {}
