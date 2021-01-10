/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface WindPowerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class WindPower extends SvelteComponentTyped<
  WindPowerProps,
  {},
  {}
> {}
