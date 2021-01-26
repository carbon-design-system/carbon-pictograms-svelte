/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StackLimitationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class StackLimitation extends SvelteComponentTyped<
  StackLimitationProps,
  {},
  {}
> {}
