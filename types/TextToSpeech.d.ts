/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextToSpeechProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TextToSpeech extends SvelteComponentTyped<
  TextToSpeechProps,
  {},
  {}
> {}
