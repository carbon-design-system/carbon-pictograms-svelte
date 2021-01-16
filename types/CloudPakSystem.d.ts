/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakSystemProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakSystem extends SvelteComponentTyped<
  CloudPakSystemProps,
  {},
  {}
> {}
