/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface ColorContrastProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class ColorContrast extends SvelteComponentTyped<
  ColorContrastProps,
  {},
  {}
> {}
