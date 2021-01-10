/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RainyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Rainy extends SvelteComponentTyped<RainyProps, {}, {}> {}
