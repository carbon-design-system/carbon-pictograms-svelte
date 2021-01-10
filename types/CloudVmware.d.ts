/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudVmwareProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudVmware extends SvelteComponentTyped<
  CloudVmwareProps,
  {},
  {}
> {}
