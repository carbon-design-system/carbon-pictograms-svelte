/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FaceNeutralProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FaceNeutral extends SvelteComponentTyped<
  FaceNeutralProps,
  {},
  {}
> {}
