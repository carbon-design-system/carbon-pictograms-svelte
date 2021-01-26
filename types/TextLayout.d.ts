/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextLayoutProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TextLayout extends SvelteComponentTyped<
  TextLayoutProps,
  {},
  {}
> {}
