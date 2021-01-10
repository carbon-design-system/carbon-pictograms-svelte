/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MovementInOverlappingNetworksProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MovementInOverlappingNetworks extends SvelteComponentTyped<
  MovementInOverlappingNetworksProps,
  {},
  {}
> {}
