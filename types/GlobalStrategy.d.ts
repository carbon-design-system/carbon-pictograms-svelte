/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalStrategyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalStrategy extends SvelteComponentTyped<
  GlobalStrategyProps,
  {},
  {}
> {}
