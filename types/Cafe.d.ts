/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CafeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Cafe extends SvelteComponentTyped<CafeProps, {}, {}> {}
