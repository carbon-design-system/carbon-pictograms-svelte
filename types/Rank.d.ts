/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RankProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Rank extends SvelteComponentTyped<RankProps, {}, {}> {}
