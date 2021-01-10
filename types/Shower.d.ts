/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ShowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Shower extends SvelteComponentTyped<ShowerProps, {}, {}> {}
