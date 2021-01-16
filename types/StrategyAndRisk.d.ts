/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StrategyAndRiskProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class StrategyAndRisk extends SvelteComponentTyped<
  StrategyAndRiskProps,
  {},
  {}
> {}
