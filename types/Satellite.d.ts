/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SatelliteProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Satellite extends SvelteComponentTyped<
  SatelliteProps,
  {},
  {}
> {}
