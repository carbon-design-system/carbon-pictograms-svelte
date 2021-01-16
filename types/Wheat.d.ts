/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WheatProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Wheat extends SvelteComponentTyped<WheatProps, {}, {}> {}
