/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface CloudOracleProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class CloudOracle extends SvelteComponentTyped<
  CloudOracleProps,
  {},
  {}
> {}
