/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CodeSyntaxProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CodeSyntax extends SvelteComponentTyped<
  CodeSyntaxProps,
  {},
  {}
> {}
