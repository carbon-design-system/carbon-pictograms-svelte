/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DubaiPalmIslandsProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DubaiPalmIslands extends SvelteComponentTyped<
  DubaiPalmIslandsProps,
  {},
  {}
> {}
