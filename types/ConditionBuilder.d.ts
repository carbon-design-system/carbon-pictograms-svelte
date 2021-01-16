/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConditionBuilderProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ConditionBuilder extends SvelteComponentTyped<
  ConditionBuilderProps,
  {},
  {}
> {}
