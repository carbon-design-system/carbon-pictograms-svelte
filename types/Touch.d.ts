/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TouchProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Touch extends SvelteComponentTyped<TouchProps, {}, {}> {}
