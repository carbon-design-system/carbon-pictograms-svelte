/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TabletDeviceProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TabletDevice extends SvelteComponentTyped<
  TabletDeviceProps,
  {},
  {}
> {}
