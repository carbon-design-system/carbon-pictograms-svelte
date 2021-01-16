/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartParallelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartParallel extends SvelteComponentTyped<
  ChartParallelProps,
  {},
  {}
> {}
