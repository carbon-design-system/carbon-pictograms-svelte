/// <reference types="svelte" />
import { SvelteComponentTyped } from "svelte";

export interface FileBackupProps
  extends svelte.JSX.HTMLAttributes<HTMLElementTagNameMap["svg"]> {
  tabindex?: string;

  /**
   * @default "currentColor"
   */
  fill?: string;
}

export default class FileBackup extends SvelteComponentTyped<
  FileBackupProps,
  {},
  {}
> {}
