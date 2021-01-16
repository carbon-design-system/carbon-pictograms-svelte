/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SelectRangeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SelectRange extends SvelteComponentTyped<
  SelectRangeProps,
  {},
  {}
> {}
