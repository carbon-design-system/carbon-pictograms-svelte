/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakForNetworkAutomationProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakForNetworkAutomation extends SvelteComponentTyped<
  CloudPakForNetworkAutomationProps,
  {},
  {}
> {}
