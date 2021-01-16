/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartMultiTypeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartMultiType extends SvelteComponentTyped<
  ChartMultiTypeProps,
  {},
  {}
> {}
