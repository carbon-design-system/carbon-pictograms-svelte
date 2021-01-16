/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConstructProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Construct extends SvelteComponentTyped<
  ConstructProps,
  {},
  {}
> {}
