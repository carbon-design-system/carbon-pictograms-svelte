/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FireExtinguisherProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FireExtinguisher extends SvelteComponentTyped<
  FireExtinguisherProps,
  {},
  {}
> {}
