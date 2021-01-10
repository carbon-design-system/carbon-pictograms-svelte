/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudDataServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudDataServices extends SvelteComponentTyped<
  CloudDataServicesProps,
  {},
  {}
> {}
