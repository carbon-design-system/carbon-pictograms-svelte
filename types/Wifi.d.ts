/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WifiProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Wifi extends SvelteComponentTyped<WifiProps, {}, {}> {}
