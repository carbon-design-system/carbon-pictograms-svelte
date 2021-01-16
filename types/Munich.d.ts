/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MunichProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Munich extends SvelteComponentTyped<MunichProps, {}, {}> {}
