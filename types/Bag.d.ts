/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BagProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bag extends SvelteComponentTyped<BagProps, {}, {}> {}
