/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DiningProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Dining extends SvelteComponentTyped<DiningProps, {}, {}> {}
