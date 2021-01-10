/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SteelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Steel extends SvelteComponentTyped<SteelProps, {}, {}> {}
