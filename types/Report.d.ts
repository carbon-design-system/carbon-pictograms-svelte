/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ReportProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Report extends SvelteComponentTyped<ReportProps, {}, {}> {}
