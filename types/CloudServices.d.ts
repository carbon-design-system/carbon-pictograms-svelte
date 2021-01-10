/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudServices extends SvelteComponentTyped<
  CloudServicesProps,
  {},
  {}
> {}
