<script lang="ts">
  import {
    AssetManagement,
    AddDevice,
    AiEthics,
    Websites,
    Containers,
  } from "carbon-pictograms-svelte";
  import ActiveServer from "carbon-pictograms-svelte/lib/ActiveServer.svelte";
  import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
  import BerlinTower from "carbon-pictograms-svelte/lib/BerlinTower.svelte";
  import type { CarbonPictogramProps } from "carbon-pictograms-svelte";

  const props = {
    fill: "red",
    "data-test": "id",
  } satisfies CarbonPictogramProps;

  // Svelte 4 components are classes.
  const pictogram = new Airplane({ target: document.body, props });
  pictogram.$destroy();

  // Props are type-checked for barrel and direct imports.
  // @ts-expect-error (`title` must be a string)
  new AiEthics({ target: document.body, props: { title: 1 } });
  // @ts-expect-error (`title` must be a string)
  new Airplane({ target: document.body, props: { title: 1 } });

  const component = AssetManagement;
</script>

<AddDevice data-test-id="" aria-label="Add Device" />
<ActiveServer class="class" style="fill: red" title="" tabindex={0} />
<BerlinTower fill="#000" on:click={() => {}} />

<Airplane aria-label="Airplane" />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label id="transportation">Transportation</label>

<Airplane aria-labelledby="transportation" />

<AiEthics />
<Websites />
<Containers />

<svelte:component this={component} height={24} />
