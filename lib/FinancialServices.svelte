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
  <path d="M31,31.36H1c-0.199,0-0.36-0.161-0.36-0.36	V1h0.72v14.64h4.308c0.174-1.131,1.154-2,2.333-2c1.301,0,2.36,1.059,2.36,2.36c0,0.521-0.169,1.003-0.457,1.395l4.703,4.702	c0.609-0.448,1.505-0.578,2.224-0.306l6.714-11.935C22.994,9.423,22.64,8.752,22.64,8c0-1.301,1.059-2.36,2.36-2.36	c1.179,0,2.159,0.869,2.333,2H31v0.72h-3.667c-0.174,1.131-1.154,2-2.333,2c-0.292,0-0.571-0.053-0.829-0.15l-6.714,11.935	c0.55,0.433,0.903,1.104,0.903,1.855c0,1.302-1.059,2.36-2.36,2.36s-2.36-1.059-2.36-2.36c0-0.521,0.169-1.003,0.457-1.395	l-4.703-4.702C9.003,18.19,8.521,18.36,8,18.36c-1.179,0-2.159-0.869-2.333-2H1.36v14.28H31V31.36z M16,22.36	c-0.904,0-1.64,0.735-1.64,1.64s0.736,1.64,1.64,1.64c0.904,0,1.64-0.735,1.64-1.64S16.904,22.36,16,22.36z M8,14.36	c-0.904,0-1.64,0.736-1.64,1.64c0,0.904,0.736,1.64,1.64,1.64S9.64,16.904,9.64,16S8.904,14.36,8,14.36z M25,6.36	c-0.904,0-1.64,0.736-1.64,1.64S24.096,9.64,25,9.64S26.64,8.904,26.64,8S25.904,6.36,25,6.36z"></path>
</svg>