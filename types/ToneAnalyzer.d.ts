/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ToneAnalyzerProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ToneAnalyzer extends SvelteComponentTyped<
  ToneAnalyzerProps,
  {},
  {}
> {}
