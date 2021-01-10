/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface GlobalTechnologyServicesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class GlobalTechnologyServices extends SvelteComponentTyped<
  GlobalTechnologyServicesProps,
  {},
  {}
> {}
