/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PaperClipProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class PaperClip extends SvelteComponentTyped<
  PaperClipProps,
  {},
  {}
> {}
