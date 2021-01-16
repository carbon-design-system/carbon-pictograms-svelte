/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VisualRecognitionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class VisualRecognition extends SvelteComponentTyped<
  VisualRecognitionProps,
  {},
  {}
> {}
