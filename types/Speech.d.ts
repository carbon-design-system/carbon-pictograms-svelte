/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SpeechProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Speech extends SvelteComponentTyped<SpeechProps, {}, {}> {}
