/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TrustProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Trust extends SvelteComponentTyped<TrustProps, {}, {}> {}
