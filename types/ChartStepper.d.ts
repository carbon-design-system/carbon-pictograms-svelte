/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChartStepperProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChartStepper extends SvelteComponentTyped<
  ChartStepperProps,
  {},
  {}
> {}
