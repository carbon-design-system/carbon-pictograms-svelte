/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartBubbleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartBubble extends SvelteComponentTyped<
  ChartBubbleProps,
  {},
  {}
> {}
