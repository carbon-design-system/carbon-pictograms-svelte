/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ElectricChargeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ElectricCharge extends SvelteComponentTyped<
  ElectricChargeProps,
  {},
  {}
> {}
