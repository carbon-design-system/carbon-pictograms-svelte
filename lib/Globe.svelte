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
  <path d="M20.484,31.36h-12v-0.72h5.656v-3.613c-2.913-0.076-5.749-1.112-8.02-2.938l0.451-0.561	c2.266,1.82,5.001,2.782,7.913,2.782c6.979,0,12.656-5.67,12.656-12.64c0-5.591-3.604-10.66-8.766-12.328l0.221-0.686	C24.05,2.42,27.86,7.771,27.86,13.67c0,7.242-5.798,13.156-13,13.355v3.614h5.625v0.721H20.484z M14.5,24.36	c-5.988,0-10.86-4.872-10.86-10.86S8.512,2.64,14.5,2.64S25.36,7.512,25.36,13.5S20.488,24.36,14.5,24.36z M14.5,3.36	C8.909,3.36,4.36,7.909,4.36,13.5S8.909,23.64,14.5,23.64s10.14-4.549,10.14-10.14S20.091,3.36,14.5,3.36z"></path>
</svg>