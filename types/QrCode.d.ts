/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface QrCodeProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class QrCode extends SvelteComponentTyped<QrCodeProps, {}, {}> {}
