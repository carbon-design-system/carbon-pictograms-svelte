/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NiceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Nice extends SvelteComponentTyped<NiceProps, {}, {}> {}
