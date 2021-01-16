/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface AnalyzeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Analyze extends SvelteComponentTyped<
  AnalyzeProps,
  {},
  {}
> {}
