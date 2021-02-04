/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MicrophoneProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Microphone extends SvelteComponentTyped<
  MicrophoneProps,
  {},
  {}
> {}
