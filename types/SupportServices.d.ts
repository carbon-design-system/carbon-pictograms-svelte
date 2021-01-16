/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SupportServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SupportServices extends SvelteComponentTyped<
  SupportServicesProps,
  {},
  {}
> {}
