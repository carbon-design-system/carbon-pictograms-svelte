/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BusProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bus extends SvelteComponentTyped<BusProps, {}, {}> {}
