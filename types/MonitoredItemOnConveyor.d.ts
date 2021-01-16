/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MonitoredItemOnConveyorProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MonitoredItemOnConveyor extends SvelteComponentTyped<
  MonitoredItemOnConveyorProps,
  {},
  {}
> {}
