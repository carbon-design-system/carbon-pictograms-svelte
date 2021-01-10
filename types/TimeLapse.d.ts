/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TimeLapseProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TimeLapse extends SvelteComponentTyped<
  TimeLapseProps,
  {},
  {}
> {}
