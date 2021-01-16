/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HeatMap_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HeatMap_02 extends SvelteComponentTyped<
  HeatMap_02Props,
  {},
  {}
> {}
