/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TextInputProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TextInput extends SvelteComponentTyped<
  TextInputProps,
  {},
  {}
> {}
