/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RichTextFormatProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RichTextFormat extends SvelteComponentTyped<
  RichTextFormatProps,
  {},
  {}
> {}
