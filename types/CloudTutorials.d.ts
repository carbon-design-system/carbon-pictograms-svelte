/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudTutorialsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudTutorials extends SvelteComponentTyped<
  CloudTutorialsProps,
  {},
  {}
> {}
