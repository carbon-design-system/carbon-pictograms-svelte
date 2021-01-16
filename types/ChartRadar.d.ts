/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartRadarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartRadar extends SvelteComponentTyped<
  ChartRadarProps,
  {},
  {}
> {}
