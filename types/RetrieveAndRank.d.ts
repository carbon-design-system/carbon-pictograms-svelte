/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RetrieveAndRankProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RetrieveAndRank extends SvelteComponentTyped<
  RetrieveAndRankProps,
  {},
  {}
> {}
