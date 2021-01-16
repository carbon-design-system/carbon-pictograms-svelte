/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MexicoCityMuseoSoumayaProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MexicoCityMuseoSoumaya extends SvelteComponentTyped<
  MexicoCityMuseoSoumayaProps,
  {},
  {}
> {}
