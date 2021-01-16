/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyPartialProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudyPartial extends SvelteComponentTyped<
  CloudyPartialProps,
  {},
  {}
> {}
