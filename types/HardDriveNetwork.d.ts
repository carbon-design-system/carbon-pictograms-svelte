/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HardDriveNetworkProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HardDriveNetwork extends SvelteComponentTyped<
  HardDriveNetworkProps,
  {},
  {}
> {}
