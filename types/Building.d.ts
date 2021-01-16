/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BuildingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Building extends SvelteComponentTyped<
  BuildingProps,
  {},
  {}
> {}
