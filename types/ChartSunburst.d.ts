/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartSunburstProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartSunburst extends SvelteComponentTyped<
  ChartSunburstProps,
  {},
  {}
> {}
