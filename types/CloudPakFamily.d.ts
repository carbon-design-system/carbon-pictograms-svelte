/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudPakFamilyProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudPakFamily extends SvelteComponentTyped<
  CloudPakFamilyProps,
  {},
  {}
> {}
