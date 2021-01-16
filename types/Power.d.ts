/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Power extends SvelteComponentTyped<PowerProps, {}, {}> {}
