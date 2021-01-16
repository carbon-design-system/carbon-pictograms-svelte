/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CheeseProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Cheese extends SvelteComponentTyped<CheeseProps, {}, {}> {}
