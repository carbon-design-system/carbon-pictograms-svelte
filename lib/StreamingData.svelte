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
  <path d="M16,31.36C7.53,31.36,0.64,24.47,0.64,16	c0-0.084,0-0.167,0.002-0.25H0.64c0-0.09,0.003-0.179,0.008-0.268C0.922,7.251,7.704,0.64,16,0.64c8.47,0,15.36,6.89,15.36,15.36	S24.47,31.36,16,31.36z M1.368,15.519C1.363,15.678,1.36,15.839,1.36,16c0,8.072,6.567,14.64,14.64,14.64	c7.064,0,12.978-5.03,14.343-11.697c-0.754,0.868-1.865,1.418-3.103,1.418c-2.261,0-4.101-1.844-4.101-4.11v-0.5	c0-1.869-1.521-3.39-3.39-3.39c-1.87,0-3.391,1.521-3.391,3.39v0.5c0,2.267-1.845,4.11-4.113,4.11c-2.264,0-4.106-1.844-4.106-4.11	v-0.5c0-1.869-1.523-3.39-3.395-3.39C2.956,12.36,1.487,13.757,1.368,15.519z M19.75,11.64c2.267,0,4.11,1.844,4.11,4.11v0.5	c0,1.869,1.516,3.39,3.38,3.39c1.869,0,3.39-1.521,3.39-3.39h0.008c0.002-0.083,0.002-0.167,0.002-0.25	c0-8.073-6.567-14.64-14.64-14.64c-7.059,0-12.967,5.022-14.339,11.681c0.753-0.858,1.856-1.401,3.084-1.401	c2.269,0,4.115,1.844,4.115,4.11v0.5c0,1.869,1.519,3.39,3.386,3.39c1.871,0,3.393-1.521,3.393-3.39v-0.5	C15.639,13.484,17.483,11.64,19.75,11.64z"></path>
</svg>