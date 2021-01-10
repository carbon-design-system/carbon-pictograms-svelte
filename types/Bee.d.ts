/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BeeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bee extends SvelteComponentTyped<BeeProps, {}, {}> {}
