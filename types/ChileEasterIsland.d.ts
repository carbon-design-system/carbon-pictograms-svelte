/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChileEasterIslandProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChileEasterIsland extends SvelteComponentTyped<
  ChileEasterIslandProps,
  {},
  {}
> {}
