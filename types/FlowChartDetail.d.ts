/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FlowChartDetailProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FlowChartDetail extends SvelteComponentTyped<
  FlowChartDetailProps,
  {},
  {}
> {}
