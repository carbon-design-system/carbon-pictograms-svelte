/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GiftProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Gift extends SvelteComponentTyped<GiftProps, {}, {}> {}
