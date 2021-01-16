/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentConversionProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DocumentConversion extends SvelteComponentTyped<
  DocumentConversionProps,
  {},
  {}
> {}
