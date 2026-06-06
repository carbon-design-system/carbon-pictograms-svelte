<script>
  import { onMount } from "svelte";
  import {
    ClickableTile,
    Search,
    CodeSnippet,
    Modal,
    Grid,
    Row,
    Column,
    Content,
    Theme,
    SelectSkeleton,
  } from "carbon-components-svelte";
  import fuzzy from "fuzzy";
  import FocusKey from "./FocusKey.svelte";
  import Header from "./Header.svelte";
  import { BUILD_INFO_URL } from "../constants";

  /** @typedef {{ order: string[]; byModuleName: Record<string, string>; total: number }} BuildInfo */

  /** @type {BuildInfo | null} */
  let data = null;

  onMount(async () => {
    const res = await fetch(BUILD_INFO_URL);
    data = await res.json();
  });

  const { match } = fuzzy;
  const WHITESPACE_REGEX = /\s+/g;
  const THEME_KEY = "theme";
  const VALID_THEMES = ["white", "g10", "g80", "g90", "g100"];

  /** @returns {import("svelte").ComponentProps<Theme>["theme"]} */
  function getStoredTheme() {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      return stored && VALID_THEMES.includes(stored) ? stored : "white";
    } catch {
      return "white";
    }
  }

  let ref = null;
  let value = "";
  let moduleName = null;

  $: searchTerm = value.trim().replace(WHITESPACE_REGEX, "");
  $: filteredModuleNamesSet =
    !data || searchTerm === ""
      ? new Set(data?.order ?? [])
      : new Set(
          data.order.filter((name) => match(searchTerm, name))
        );

  /** @type {import("svelte").ComponentProps<Theme>["theme"]} */
  let theme = getStoredTheme();

  $: mounted = typeof document !== "undefined";
  $: code = `<script>\n  import ${moduleName} from "carbon-pictograms-svelte/lib/${moduleName}.svelte";\n<\/script>\n\n<${moduleName} />`;
  $: if (mounted) {
    document.documentElement.style.setProperty(
      "color-scheme",
      ["white", "g10"].includes(theme) ? "light" : "dark"
    );
  }
</script>

<FocusKey element={ref} selectText />

<Header />

{#if data}
  <Modal
    passiveModal
    open={moduleName != null}
    modalHeading={moduleName}
    on:transitionend={({ detail }) => {
      if (!detail.open) moduleName = null;
    }}
  >
    <div class="pictogram-preview">
      {@html data.byModuleName[moduleName]}
    </div>
    <CodeSnippet light type="multi" {code} />
  </Modal>
{/if}

<Content>
  <Grid padding>
    <Row>
      <Column>
        <div class="flex">
          {#if mounted}
            <Theme
              bind:theme
              persist
              persistKey={THEME_KEY}
              render="select"
              select={{
                id: "select-theme",
                labelText: "Carbon theme",
                themes: VALID_THEMES,
              }}
            />
          {:else}
            <SelectSkeleton id="select-theme-skeleton" />
          {/if}
          <Search
            size="lg"
            style="border-left: 1px solid var(--cds-ui-03);"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            labelText="Search"
            placeholder={`Search pictograms (e.g. "Airplane")`}
            bind:ref
            bind:value
            disabled={!data}
          />
        </div>
      </Column>
    </Row>

    {#if data}
      <Row>
        <Column>
          <span class="text-02">
            Showing
            {filteredModuleNamesSet.size.toLocaleString()}
            of
            {data.total.toLocaleString()}
            pictograms
          </span>
        </Column>
      </Row>
      <Row>
        <Column>
          <ul class="grid">
            {#each data.order as pictogram (pictogram)}
              {@const isFiltered = filteredModuleNamesSet.has(pictogram)}
              <li style:display={isFiltered ? "inline" : "none"}>
                <ClickableTile
                  title={pictogram}
                  on:click={() => (moduleName = pictogram)}
                >
                  {@html data.byModuleName[pictogram]}
                </ClickableTile>
              </li>
            {/each}
          </ul>
        </Column>
      </Row>
    {/if}
  </Grid>
</Content>

<style>
  :global(html) {
    scrollbar-gutter: stable;
  }

  :global(.bx--content) {
    padding: 0;
  }

  :global(body) {
    overflow-y: scroll;
  }

  :global(.bx--tile) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .flex {
    display: flex;
    align-items: flex-end;
  }

  :global(#select-theme) {
    width: 8rem;
  }

  :global(#select-theme-skeleton) {
    position: relative;
    height: 64px;
    top: 2px;
    min-width: 8rem;
  }

  :global(.text-02) {
    color: var(--cds-text-02);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .pictogram-preview {
    margin-bottom: var(--cds-spacing-06);
  }
</style>
