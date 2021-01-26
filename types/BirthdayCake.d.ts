/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface BirthdayCakeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class BirthdayCake extends SvelteComponentTyped<
  BirthdayCakeProps,
  {},
  {}
> {}
