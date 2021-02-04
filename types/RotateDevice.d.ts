/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface RotateDeviceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class RotateDevice extends SvelteComponentTyped<
  RotateDeviceProps,
  {},
  {}
> {}
