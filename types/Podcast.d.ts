/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface PodcastProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Podcast extends SvelteComponentTyped<
  PodcastProps,
  {},
  {}
> {}
