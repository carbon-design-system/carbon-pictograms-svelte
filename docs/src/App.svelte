<script>
  import { Search, Modal, CodeSnippet } from "carbon-components-svelte";
  import * as pictograms from "carbon-pictograms-svelte";
  import copy from "clipboard-copy";
  import { match } from "fuzzy";

  let value = "";
  let moduleName = null;

  $: code = `<script>
  import ${moduleName} from "carbon-pictograms-svelte/lib/${moduleName}";
<\/script>

<${moduleName} />`;
</script>

<style>
  :global(body) {
    overflow-y: scroll;
  }

  :global(body.bx--body--with-modal-open) {
    overflow-y: scroll;
  }

  .logo {
    display: flex;
    align-items: baseline;
  }

  .logo span {
    margin-left: 0.25rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
  }

  li {
    margin: 0.25rem 0.5rem;
    cursor: pointer;
  }

  .bx--row {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  li:not(.match) {
    display: none;
  }
</style>

<main class="bx--grid">
  <div class="bx--row">
    <div class="bx--col">
      <div class="logo">
        <h5>
          <a href="https://github.com/IBM/carbon-pictograms-svelte">
            carbon-pictograms-svelte
          </a>
        </h5>
        <span>v{window.VERSION}</span>
      </div>
    </div>
  </div>
  <div class="bx--row">
    <div class="bx--col">
      <Search placeholder="Search pictograms..." autofocus small bind:value />
    </div>
  </div>
  <ul class="bx--row bx--no-gutter">
    {#each Object.keys(pictograms) as pictogram, i (pictogram)}
      <li
        class:match={match(value.trim(), pictogram)}
        on:click={() => {
          moduleName = pictogram;
        }}>
        <svelte:component this={pictograms[pictogram]} width={72} height={72} />
      </li>
    {/each}
  </ul>
</main>

<Modal passiveModal open={moduleName != null} modalHeading={moduleName}>
  <CodeSnippet
    light
    type="multi"
    on:click={() => {
      copy(code);
    }}
    {code} />
</Modal>
