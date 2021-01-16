/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CropProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class Crop extends SvelteComponentTyped<CropProps, {}, {}> {}
