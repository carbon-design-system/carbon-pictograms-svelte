/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AssetsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Assets extends SvelteComponentTyped<AssetsProps, {}, {}> {}
