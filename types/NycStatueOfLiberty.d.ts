/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NycStatueOfLibertyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NycStatueOfLiberty extends SvelteComponentTyped<
  NycStatueOfLibertyProps,
  {},
  {}
> {}
