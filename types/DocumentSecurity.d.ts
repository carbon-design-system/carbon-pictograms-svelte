/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DocumentSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DocumentSecurity extends SvelteComponentTyped<
  DocumentSecurityProps,
  {},
  {}
> {}
