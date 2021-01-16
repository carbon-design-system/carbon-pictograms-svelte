/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CairoGizaPlateauProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CairoGizaPlateau extends SvelteComponentTyped<
  CairoGizaPlateauProps,
  {},
  {}
> {}
