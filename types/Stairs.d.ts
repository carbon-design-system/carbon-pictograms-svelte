/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StairsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Stairs extends SvelteComponentTyped<StairsProps, {}, {}> {}
