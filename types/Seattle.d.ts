/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SeattleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Seattle extends SvelteComponentTyped<
  SeattleProps,
  {},
  {}
> {}
