/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeechToTextProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SpeechToText extends SvelteComponentTyped<
  SpeechToTextProps,
  {},
  {}
> {}
