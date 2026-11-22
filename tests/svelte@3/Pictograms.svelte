<script lang="ts">
  import { AiEthics, Websites } from "carbon-pictograms-svelte";
  import type { CarbonPictogramProps } from "carbon-pictograms-svelte";
  import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";

  // Svelte 3's `svelte/elements` has no `data-*` index signature.
  const props = {
    fill: "red",
    "data-test": "id",
  } satisfies CarbonPictogramProps;

  const pictogram = new Airplane({ target: document.body, props });
  pictogram.$destroy();

  // Props are type-checked for barrel and direct imports.
  // @ts-expect-error (`title` must be a string)
  new AiEthics({ target: document.body, props: { title: 1 } });
  // @ts-expect-error (`title` must be a string)
  new Airplane({ target: document.body, props: { title: 1 } });
</script>

<AiEthics fill="red" title="title" data-test="id" />
<Airplane {...props} data-testid="pictogram" on:click={() => {}} />
<svelte:component this={Websites} />
