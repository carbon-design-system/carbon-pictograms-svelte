/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface EyewashStationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class EyewashStation extends SvelteComponentTyped<
  EyewashStationProps,
  {},
  {}
> {}
