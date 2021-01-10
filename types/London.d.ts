/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LondonProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class London extends SvelteComponentTyped<LondonProps, {}, {}> {}
