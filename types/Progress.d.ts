/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ProgressProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Progress extends SvelteComponentTyped<
  ProgressProps,
  {},
  {}
> {}
