/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface DataBackupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class DataBackup extends SvelteComponentTyped<
  DataBackupProps,
  {},
  {}
> {}
