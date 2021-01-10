/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ConnectedNodesToTheCloudProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ConnectedNodesToTheCloud extends SvelteComponentTyped<
  ConnectedNodesToTheCloudProps,
  {},
  {}
> {}
