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

  const component = AssetManagement;
</script>

<AddDevice data-test-id="" aria-label="Add Device" />
<ActiveServer class="class" style="fill: red" title="" tabindex={0} />
<BerlinTower fill="#000" />

<Airplane aria-label="Airplane" />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label id="transportation">Transportation</label>

<Airplane aria-labelledby="transportation" />

<AiEthics />
<Websites />
<Containers />

<svelte:component this={component} height={24} />
