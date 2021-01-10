/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AustinProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Austin extends SvelteComponentTyped<AustinProps, {}, {}> {}
