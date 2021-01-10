/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RenewProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Renew extends SvelteComponentTyped<RenewProps, {}, {}> {}
