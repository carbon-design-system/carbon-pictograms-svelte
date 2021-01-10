/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MaximizeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Maximize extends SvelteComponentTyped<
  MaximizeProps,
  {},
  {}
> {}
