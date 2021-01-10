/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudManagedServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudManagedServices extends SvelteComponentTyped<
  CloudManagedServicesProps,
  {},
  {}
> {}
