/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobeLocationsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  /**
   * Set a tabindex value
   */
  tabindex?: string;

  /**
   * Set a custom SVG fill color
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobeLocations extends SvelteComponentTyped<
  GlobeLocationsProps,
  {},
  {}
> {}
