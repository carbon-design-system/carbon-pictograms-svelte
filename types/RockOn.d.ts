/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RockOnProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RockOn extends SvelteComponentTyped<RockOnProps, {}, {}> {}
