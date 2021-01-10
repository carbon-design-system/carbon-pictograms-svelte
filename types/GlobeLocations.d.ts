/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobeLocationsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobeLocations extends SvelteComponentTyped<
  GlobeLocationsProps,
  {},
  {}
> {}
