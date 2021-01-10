/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartBubbleLineProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartBubbleLine extends SvelteComponentTyped<
  ChartBubbleLineProps,
  {},
  {}
> {}
