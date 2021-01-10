/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface NetworkServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class NetworkServices extends SvelteComponentTyped<
  NetworkServicesProps,
  {},
  {}
> {}
