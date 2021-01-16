/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ParliamentProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Parliament extends SvelteComponentTyped<
  ParliamentProps,
  {},
  {}
> {}
