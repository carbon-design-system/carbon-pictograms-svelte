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
  <path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16S7.53,0.64,16,0.64S31.36,7.53,31.36,16	S24.47,31.36,16,31.36z M16,1.36C7.927,1.36,1.36,7.927,1.36,16c0,8.072,6.567,14.64,14.64,14.64c8.072,0,14.64-6.567,14.64-14.64	S24.072,1.36,16,1.36z M16,28.36C9.185,28.36,3.64,22.815,3.64,16S9.185,3.64,16,3.64S28.36,9.185,28.36,16S22.815,28.36,16,28.36z M16.36,20.346v7.289c6.133-0.188,11.087-5.142,11.275-11.275h-7.289C20.172,18.478,18.478,20.172,16.36,20.346z M4.366,16.36	c0.187,6.133,5.141,11.087,11.274,11.275v-7.289c-2.118-0.174-3.812-1.868-3.985-3.986H4.366z M16,12.36	c-2.007,0-3.64,1.633-3.64,3.64s1.633,3.64,3.64,3.64s3.64-1.633,3.64-3.64S18.007,12.36,16,12.36z M20.346,15.64h7.289	C27.444,9.387,22.298,4.36,16,4.36S4.556,9.387,4.366,15.64h7.289c0.184-2.236,2.062-4,4.345-4S20.162,13.404,20.346,15.64z"></path>
</svg>