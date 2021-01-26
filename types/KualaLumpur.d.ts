/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface KualaLumpurProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class KualaLumpur extends SvelteComponentTyped<
  KualaLumpurProps,
  {},
  {}
> {}
