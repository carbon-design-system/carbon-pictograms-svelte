<script>
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
  import FocusKey from "svelte-focus-key";
  import fuzzy from "fuzzy";
  import Header from "./Header.svelte";
  import * as pictograms from "../../../lib";

  const { match } = fuzzy;
  const pictogramNames = Object.keys(pictograms);

  let ref = null;
  let moduleName = null;
  let value = "";
  let theme = "white";

  $: filteredModuleNames = pictogramNames.filter((name) =>
    match(value.trim().replace(/\s+/g, ""), name)
  );
  $: mounted = typeof document !== "undefined";
  $: code = `<script>\n  import ${moduleName} from "carbon-pictograms-svelte/lib/${moduleName}.svelte";\n<\/script>\n\n<${moduleName} />`;
</script>

<FocusKey element={ref} selectText />

<Header />

<Modal
  passiveModal
  open={moduleName != null}
  modalHeading={moduleName}
  on:transitionend={({ detail }) => {
    if (!detail.open) moduleName = null;
  }}
>
  <div class:pictogram-preview={true}>
    <svelte:component this={pictograms[moduleName]} />
  </div>
  <CodeSnippet light type="multi" {code} />
</Modal>

<Content>
  <Grid padding>
    <Row>
      <Column>
        <div class="flex">
          {#if mounted}
            <Theme
              bind:theme
              persist
              render="select"
              select={{
                id: "select-theme",
                labelText: "Carbon theme",
                themes: ["white", "g10", "g80", "g90", "g100"],
              }}
            />
          {:else}
            <SelectSkeleton id="select-theme" />
          {/if}
          <Search
            size="lg"
            style="border-left: 1px solid var(--cds-ui-03);"
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            titleText="Search"
            labelText="Search"
            placeholder={`Search pictograms (e.g. "Airplane")`}
            bind:ref
            bind:value
          />
        </div>
      </Column>
    </Row>

    <Row>
      <Column>
        <span class="text-02"
          >Showing
          {filteredModuleNames.length.toLocaleString()}
          of
          {pictogramNames.length.toLocaleString()}
          icons</span
        >
      </Column>
    </Row>
    <Row>
      <Column>
        <div class="grid">
          {#each pictogramNames as pictogram (pictogram)}
            {#if filteredModuleNames.includes(pictogram)}
              <ClickableTile
                title={pictogram}
                on:click={() => (moduleName = pictogram)}
              >
                <svelte:component this={pictograms[pictogram]} />
              </ClickableTile>
            {/if}
          {/each}
        </div>
      </Column>
    </Row>
  </Grid>
</Content>

<style>
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

  :global(#select-theme) {
    width: 8rem;
  }

  :global(.text-02) {
    color: var(--cds-text-02);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  }

  .flex {
    display: flex;
    align-items: flex-end;
  }

  .pictogram-preview {
    margin-bottom: var(--cds-spacing-06);
  }
</style>
