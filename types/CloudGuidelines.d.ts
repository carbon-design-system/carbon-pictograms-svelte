/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudGuidelinesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudGuidelines extends SvelteComponentTyped<
  CloudGuidelinesProps,
  {},
  {}
> {}