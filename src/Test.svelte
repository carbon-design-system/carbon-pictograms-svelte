<script lang="ts">
  import { AddDevice, AiEthics } from "../lib";
  import ActiveServer from "../lib/ActiveServer.svelte";
  import Airplane from "../lib/Airplane.svelte";
  import BerlinTower from "../lib/BerlinTower.svelte";
</script>

<AddDevice aria-label="Add Device" />
<ActiveServer class="class" style="fill: red" title="" tabindex={0} />
<BerlinTower fill="#000" />

<Airplane aria-label="Airplane" />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label id="transportation">Transportation</label>

<Airplane aria-labelledby="transportation" />

<AiEthics />
