/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DevicePairingProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DevicePairing extends SvelteComponentTyped<
  DevicePairingProps,
  {},
  {}
> {}
