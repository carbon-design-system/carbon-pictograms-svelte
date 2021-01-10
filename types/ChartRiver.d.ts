/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartRiverProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartRiver extends SvelteComponentTyped<
  ChartRiverProps,
  {},
  {}
> {}
