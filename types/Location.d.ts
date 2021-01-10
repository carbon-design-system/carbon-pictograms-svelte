/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface LocationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Location extends SvelteComponentTyped<
  LocationProps,
  {},
  {}
> {}
