/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudyHumidProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudyHumid extends SvelteComponentTyped<
  CloudyHumidProps,
  {},
  {}
> {}
