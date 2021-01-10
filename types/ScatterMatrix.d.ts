/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ScatterMatrixProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ScatterMatrix extends SvelteComponentTyped<
  ScatterMatrixProps,
  {},
  {}
> {}
