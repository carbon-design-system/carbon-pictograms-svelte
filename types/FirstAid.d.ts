/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FirstAidProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FirstAid extends SvelteComponentTyped<
  FirstAidProps,
  {},
  {}
> {}
