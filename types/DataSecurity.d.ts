/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataSecurityProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataSecurity extends SvelteComponentTyped<
  DataSecurityProps,
  {},
  {}
> {}
