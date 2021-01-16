/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface HardDriveProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class HardDrive extends SvelteComponentTyped<
  HardDriveProps,
  {},
  {}
> {}
