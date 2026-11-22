<script lang="ts">
  import { AiEthics } from "carbon-pictograms-svelte";
  import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
  import Alias from "carbon-pictograms-svelte/lib/ExpandHorz.svelte";
  import { mount } from "svelte";

  // Deep imports must stay typed under `"moduleResolution": "NodeNext"`,
  // which doesn't allow directory imports like `"./"` in declarations.
  // @ts-expect-error (`title` must be a string)
  mount(Airplane, { target: document.body, props: { title: 1 } });
  // @ts-expect-error (`title` must be a string)
  mount(Alias, { target: document.body, props: { title: 1 } });
  // @ts-expect-error (`title` must be a string)
  mount(AiEthics, { target: document.body, props: { title: 1 } });
</script>

<AiEthics />
<Airplane fill="red" data-test="id" />
<Alias title="Expand" />
