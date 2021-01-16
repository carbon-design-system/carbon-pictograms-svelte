/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GrowthProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Growth extends SvelteComponentTyped<GrowthProps, {}, {}> {}
