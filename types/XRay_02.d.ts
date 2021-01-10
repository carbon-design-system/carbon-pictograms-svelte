/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface XRay_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class XRay_02 extends SvelteComponentTyped<
  XRay_02Props,
  {},
  {}
> {}
