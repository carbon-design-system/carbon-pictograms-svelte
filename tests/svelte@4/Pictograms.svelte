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
  import { mount } from "svelte";

   // Use the exported `CarbonPictogramProps` type for typing objects since the 
  // idiomatic `ComponentProps` utility is not compatible with `Component` in Svelte 4.
  const props= {
    fill: "red",
  } satisfies CarbonPictogramProps;

  // Instead, you can use a const assertion for type safety.
  const component_props = {
    fill: "red",
    "data-test": "id",
  } as const;

  // @ts-expect-error (Svelte components are no longer classes)
  // See https://svelte.dev/docs/svelte/v5-migration-guide#Components-are-no-longer-classes
  const icon_class = new Airplane({ target: document.body, props });
  
  // Instead, use the `mount` function to manually instantiate the component.
  mount(Airplane, { target: document.body, props: component_props });

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
