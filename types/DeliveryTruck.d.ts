/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DeliveryTruckProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DeliveryTruck extends SvelteComponentTyped<
  DeliveryTruckProps,
  {},
  {}
> {}
