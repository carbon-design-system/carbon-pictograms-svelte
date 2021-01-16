/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ElectricCarProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ElectricCar extends SvelteComponentTyped<
  ElectricCarProps,
  {},
  {}
> {}
