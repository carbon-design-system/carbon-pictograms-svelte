/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BicycleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Bicycle extends SvelteComponentTyped<
  BicycleProps,
  {},
  {}
> {}
