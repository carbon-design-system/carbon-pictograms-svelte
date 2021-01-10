/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DetectAndStopAdvancingThreatsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DetectAndStopAdvancingThreats extends SvelteComponentTyped<
  DetectAndStopAdvancingThreatsProps,
  {},
  {}
> {}
