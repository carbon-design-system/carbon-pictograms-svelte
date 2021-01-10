<script>
  import {
    ClickableTile,
    Grid,
    Row,
    Column,
    Content,
    Select,
    SelectItem,
    Search,
    Modal,
    CodeSnippet,
  } from "carbon-components-svelte";
  import * as pictograms from "carbon-pictograms-svelte";
  import copy from "clipboard-copy";
  import { match } from "fuzzy";
  import Header from "./Header.svelte";

  let value = "";
  let moduleName = null;
  let theme = "g100";

  $: document.documentElement.setAttribute("theme", theme);
  $: code = `<script>
  import ${moduleName} from "carbon-pictograms-svelte/lib/${moduleName}.svelte";
<\/script>

<${moduleName} />`;
</script>

<style>
  :global(body) {
    overflow-y: scroll;
  }

  .flex {
    display: flex;
    align-items: flex-end;
    margin-bottom: var(--cds-layout-03);
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

  :global(.bx--tile:not(.match)) {
    display: none;
  }

  :global(#select-theme) {
    width: 9rem;
  }
</style>

<Header />

<Modal passiveModal open={moduleName != null} modalHeading={moduleName}>
  <CodeSnippet
    light
    type="multi"
    on:click={() => {
      copy(code);
    }}
    {code} />
</Modal>

<Content style="background: none; padding: var(--cds-spacing-06) 0;">
  <Grid>
    <Row>
      <Column>
        <div class="flex">
          <Select
            id="select-theme"
            size="xl"
            labelText="Carbon theme"
            bind:selected={theme}>
            <SelectItem value="white" text="White" />
            <SelectItem value="g10" text="Gray 10" />
            <SelectItem value="g90" text="Gray 90" />
            <SelectItem value="g100" text="Gray 100" />
          </Select>
          <Search
            style="border-left: 1px solid var(--cds-ui-03);"
            titleText="Search"
            labelText="Search"
            placeholder={`Search pictograms by name (e.g. "Airplane")`}
            bind:value />
        </div>
      </Column>
    </Row>
    <Row>
      <Column>
        <ul>
          {#each Object.keys(pictograms) as pictogram (pictogram)}
            <ClickableTile
              class={match(value.trim(), pictogram) && 'match'}
              on:click={() => {
                moduleName = pictogram;
              }}>
              <svelte:component this={pictograms[pictogram]} />
            </ClickableTile>
          {/each}
        </ul>
      </Column>
    </Row>
  </Grid>
</Content>
