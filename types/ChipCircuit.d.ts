/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ChipCircuitProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ChipCircuit extends SvelteComponentTyped<
  ChipCircuitProps,
  {},
  {}
> {}
