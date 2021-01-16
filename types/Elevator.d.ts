/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ElevatorProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Elevator extends SvelteComponentTyped<
  ElevatorProps,
  {},
  {}
> {}
