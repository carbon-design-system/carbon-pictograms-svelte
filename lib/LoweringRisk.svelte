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
  <path d="M14,19.5c-0.276,0-0.5-0.224-0.5-0.5	s0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5S14.276,19.5,14,19.5z M31.36,24c0,4.059-3.302,7.36-7.36,7.36s-7.36-3.302-7.36-7.36	c0-0.216,0.009-0.429,0.027-0.64H1c-0.129,0-0.249-0.069-0.312-0.182c-0.064-0.112-0.063-0.251,0.002-0.362l13-22	c0.13-0.22,0.49-0.22,0.62,0l9.355,15.831c0.11-0.005,0.223-0.007,0.335-0.007C28.059,16.64,31.36,19.941,31.36,24z M16.766,22.64	c0.572-3.048,3.028-5.438,6.109-5.914L14,1.708L1.631,22.64H16.766z M30.64,24c0-3.661-2.979-6.64-6.64-6.64s-6.64,2.979-6.64,6.64	s2.979,6.64,6.64,6.64S30.64,27.661,30.64,24z M13.64,17h0.72V8h-0.72V17z M24.36,26.131V20h-0.72v6.131l-2.385-2.386l-0.51,0.51	L24,27.509l3.255-3.254l-0.51-0.51L24.36,26.131z"></path>
</svg>