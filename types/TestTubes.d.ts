/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface TestTubesProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class TestTubes extends SvelteComponentTyped<
  TestTubesProps,
  {},
  {}
> {}
