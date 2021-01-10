/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TouchScreenProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TouchScreen extends SvelteComponentTyped<
  TouchScreenProps,
  {},
  {}
> {}
