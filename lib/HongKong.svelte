<script>
  /**
   * Specify the pictogram title.
   * @type {string}
   */
  export let title = undefined;

  $: labelled =  $$props["aria-label"] || $$props["aria-labelledby"] || $$props["title"];
  $: attributes = {
    "aria-hidden": labelled ? undefined : true,
    role: labelled ? "img" : undefined,
    focusable: Number($$props["tabindex"]) === 0  ? true : undefined,
  };
</script>

<svg
  preserveAspectRatio="xMidYMid meet"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  width="64"
  height="64"
  fill="currentColor"
  {title}
  {...attributes}
  {...$$restProps}>
  <path d="M31,31.36H1v-0.72h9.64V17c0-0.136,0.077-0.261,0.199-0.322l4.801-2.401V1h0.72v3.277l1.28,0.64V1h0.721	v4.277l2.801,1.401C21.283,6.739,21.36,6.864,21.36,7v23.64H31V31.36z M16.36,30.64h4.28v-1.28h-4.28V30.64z M11.36,30.64h4.28	v-1.28h-4.28C11.36,29.36,11.36,30.64,11.36,30.64z M16.36,28.64h4.28v-1.417l-4.28-2.141V28.64z M11.36,28.64h4.28v-3.558	l-4.28,2.141C11.36,27.223,11.36,28.64,11.36,28.64z M16.805,24.5l3.834,1.918v-3.836L16.805,24.5z M11.36,22.582v3.836l3.835-1.918	L11.36,22.582z M16.36,20.082v3.836L20.195,22L16.36,20.082z M11.805,22l3.835,1.918v-3.836L11.805,22z M16.805,19.5l3.834,1.918	v-3.836L16.805,19.5z M11.36,17.582v3.836l3.835-1.918L11.36,17.582z M16.36,15.083v3.835L20.195,17L16.36,15.083z M11.805,17	l3.835,1.918v-3.835L11.805,17z M16.805,14.5l3.834,1.917v-3.835L16.805,14.5z M16.36,10.083v3.835L20.195,12L16.36,10.083z M16.805,9.5l3.834,1.917V7.583L16.805,9.5z M16.36,5.083v3.835L20.195,7L16.36,5.083z"></path>
</svg>