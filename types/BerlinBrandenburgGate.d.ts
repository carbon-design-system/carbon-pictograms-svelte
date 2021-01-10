/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BerlinBrandenburgGateProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BerlinBrandenburgGate extends SvelteComponentTyped<
  BerlinBrandenburgGateProps,
  {},
  {}
> {}
