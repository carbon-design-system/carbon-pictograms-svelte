/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IbmZPartitionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IbmZPartition extends SvelteComponentTyped<
  IbmZPartitionProps,
  {},
  {}
> {}
