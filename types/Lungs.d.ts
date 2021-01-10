/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LungsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Lungs extends SvelteComponentTyped<LungsProps, {}, {}> {}
