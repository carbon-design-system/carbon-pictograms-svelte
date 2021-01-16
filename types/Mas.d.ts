/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MasProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Mas extends SvelteComponentTyped<MasProps, {}, {}> {}
