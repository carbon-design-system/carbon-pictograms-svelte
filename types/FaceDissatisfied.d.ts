/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaceDissatisfiedProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FaceDissatisfied extends SvelteComponentTyped<
  FaceDissatisfiedProps,
  {},
  {}
> {}
