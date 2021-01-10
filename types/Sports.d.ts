/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SportsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Sports extends SvelteComponentTyped<SportsProps, {}, {}> {}
