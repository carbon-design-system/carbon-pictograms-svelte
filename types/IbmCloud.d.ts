/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface IbmCloudProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class IbmCloud extends SvelteComponentTyped<
  IbmCloudProps,
  {},
  {}
> {}
