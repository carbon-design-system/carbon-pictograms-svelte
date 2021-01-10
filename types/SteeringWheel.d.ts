/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SteeringWheelProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SteeringWheel extends SvelteComponentTyped<
  SteeringWheelProps,
  {},
  {}
> {}
