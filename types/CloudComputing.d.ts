/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudComputingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudComputing extends SvelteComponentTyped<
  CloudComputingProps,
  {},
  {}
> {}
