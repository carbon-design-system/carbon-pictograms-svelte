/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface InnovateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Innovate extends SvelteComponentTyped<
  InnovateProps,
  {},
  {}
> {}
