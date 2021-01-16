/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface MobileChatProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class MobileChat extends SvelteComponentTyped<
  MobileChatProps,
  {},
  {}
> {}
