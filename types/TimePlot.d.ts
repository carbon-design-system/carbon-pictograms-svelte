/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TimePlotProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TimePlot extends SvelteComponentTyped<
  TimePlotProps,
  {},
  {}
> {}
