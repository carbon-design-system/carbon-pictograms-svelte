/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface SampleFileProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class SampleFile extends SvelteComponentTyped<
  SampleFileProps,
  {},
  {}
> {}
