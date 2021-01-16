/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SolarPanelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SolarPanel extends SvelteComponentTyped<
  SolarPanelProps,
  {},
  {}
> {}
