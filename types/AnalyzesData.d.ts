/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AnalyzesDataProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class AnalyzesData extends SvelteComponentTyped<
  AnalyzesDataProps,
  {},
  {}
> {}
