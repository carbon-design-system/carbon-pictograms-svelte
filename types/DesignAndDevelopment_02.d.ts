/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DesignAndDevelopment_02Props
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DesignAndDevelopment_02 extends SvelteComponentTyped<
  DesignAndDevelopment_02Props,
  {},
  {}
> {}
