/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SocksProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Socks extends SvelteComponentTyped<SocksProps, {}, {}> {}
