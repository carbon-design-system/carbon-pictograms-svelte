/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WasherProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Washer extends SvelteComponentTyped<WasherProps, {}, {}> {}
