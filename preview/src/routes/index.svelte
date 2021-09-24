<script>
  import "carbon-components-svelte/css/all.css";
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
  } from "carbon-components-svelte";
  import * as pictograms from "../../../lib";
  import fuzzy from "fuzzy";
  import Header from "$lib/Header.svelte";
  import { version } from "../../../package.json";

  const { match } = fuzzy;

  let ref = null;
  let value = "";

  $: pictogramNames = Object.keys(pictograms);
  $: filteredModuleNames = pictogramNames.filter((name) => match(value, name));

  let theme = "white";

  $: if (typeof document !== "undefined") {
    document.documentElement.setAttribute("theme", theme);
  }

  let moduleName = null;

  $: code = `<script>\n  import ${moduleName} from "carbon-pictograms-svelte/lib/${moduleName}.svelte";\n<\/script>\n\n<${moduleName} />`;
</script>

<svelte:body
  on:keydown={(e) => {
    if (e.key === "/" && document.activeElement !== ref) {
      e.preventDefault();
      ref.focus();
    }
  }} />

<Header {version} />

<Modal
  passiveModal
  open={moduleName != null}
  modalHeading={moduleName}
  on:transitionend={({ detail }) => {
    if (!detail.open) moduleName = null;
  }}
>
  <div style="margin-bottom: var(--cds-spacing-06);">
    <svelte:component this={pictograms[moduleName]} />
  </div>
  <CodeSnippet light type="multi" {code} />
</Modal>

<Content style="background: none; padding: 0;">
  <Grid padding>
    <Row>
      <Column>
        <div class="flex">
          <Theme
            bind:theme
            render="select"
            select={{
              id: "select-theme",
              size: "xl",
              labelText: "Carbon theme",
              themes: ["white", "g10", "g80", "g90", "g100"],
            }}
          />
          <Search
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
        <ul>
          {#each pictogramNames as pictogram (pictogram)}
            {#if filteredModuleNames.includes(pictogram)}
              <ClickableTile on:click={() => (moduleName = pictogram)}>
                <svelte:component this={pictograms[pictogram]} />
              </ClickableTile>
            {/if}
          {/each}
        </ul>
      </Column>
    </Row>
  </Grid>
</Content>

<style>
  .flex {
    display: flex;
    align-items: flex-end;
  }

  :global(body) {
    overflow-y: scroll;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  :global(.bx--tile) {
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% / 16);
    min-width: 9.3875rem;
    flex: 0 0 auto;
  }

  :global(#select-theme) {
    width: 8rem;
  }

  :global(.text-02) {
    color: var(--cds-text-02);
  }
</style>
