/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WorldCommunityGridProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WorldCommunityGrid extends SvelteComponentTyped<
  WorldCommunityGridProps,
  {},
  {}
> {}
