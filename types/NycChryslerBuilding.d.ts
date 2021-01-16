/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NycChryslerBuildingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NycChryslerBuilding extends SvelteComponentTyped<
  NycChryslerBuildingProps,
  {},
  {}
> {}
