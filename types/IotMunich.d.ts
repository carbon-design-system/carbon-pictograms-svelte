/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IotMunichProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IotMunich extends SvelteComponentTyped<
  IotMunichProps,
  {},
  {}
> {}
