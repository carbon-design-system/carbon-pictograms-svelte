/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MortarAndPestleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MortarAndPestle extends SvelteComponentTyped<
  MortarAndPestleProps,
  {},
  {}
> {}
