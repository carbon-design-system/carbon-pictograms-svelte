/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SatelliteDishProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SatelliteDish extends SvelteComponentTyped<
  SatelliteDishProps,
  {},
  {}
> {}
