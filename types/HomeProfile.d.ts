/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HomeProfileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HomeProfile extends SvelteComponentTyped<
  HomeProfileProps,
  {},
  {}
> {}
