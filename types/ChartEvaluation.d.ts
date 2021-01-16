/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartEvaluationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartEvaluation extends SvelteComponentTyped<
  ChartEvaluationProps,
  {},
  {}
> {}
