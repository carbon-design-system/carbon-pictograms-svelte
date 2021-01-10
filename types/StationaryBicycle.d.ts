/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface StationaryBicycleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class StationaryBicycle extends SvelteComponentTyped<
  StationaryBicycleProps,
  {},
  {}
> {}
