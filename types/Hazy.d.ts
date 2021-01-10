/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HazyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Hazy extends SvelteComponentTyped<HazyProps, {}, {}> {}
