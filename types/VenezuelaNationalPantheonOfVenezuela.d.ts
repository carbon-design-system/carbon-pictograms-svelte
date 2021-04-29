/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface VenezuelaNationalPantheonOfVenezuelaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class VenezuelaNationalPantheonOfVenezuela extends SvelteComponentTyped<
  VenezuelaNationalPantheonOfVenezuelaProps,
  {},
  {}
> {}
