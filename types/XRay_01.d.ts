/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XRay_01Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class XRay_01 extends SvelteComponentTyped<
  XRay_01Props,
  {},
  {}
> {}
