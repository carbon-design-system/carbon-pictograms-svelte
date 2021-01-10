/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AddDeviceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AddDevice extends SvelteComponentTyped<
  AddDeviceProps,
  {},
  {}
> {}
