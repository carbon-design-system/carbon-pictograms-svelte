/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SproutProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Sprout extends SvelteComponentTyped<SproutProps, {}, {}> {}
