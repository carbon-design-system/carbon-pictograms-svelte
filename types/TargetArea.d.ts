/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TargetAreaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TargetArea extends SvelteComponentTyped<
  TargetAreaProps,
  {},
  {}
> {}
