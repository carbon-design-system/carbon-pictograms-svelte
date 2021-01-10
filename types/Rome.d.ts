/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RomeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Rome extends SvelteComponentTyped<RomeProps, {}, {}> {}
