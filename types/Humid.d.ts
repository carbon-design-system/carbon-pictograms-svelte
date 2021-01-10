/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HumidProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Humid extends SvelteComponentTyped<HumidProps, {}, {}> {}
