/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CareProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Care extends SvelteComponentTyped<CareProps, {}, {}> {}
