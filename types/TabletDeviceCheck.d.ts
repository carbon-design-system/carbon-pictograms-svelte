/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TabletDeviceCheckProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TabletDeviceCheck extends SvelteComponentTyped<
  TabletDeviceCheckProps,
  {},
  {}
> {}
