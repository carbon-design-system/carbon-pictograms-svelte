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
  <path d="M31,31.36H1v-0.72h30V31.36z M31,24.36H1c-0.199,0-0.36-0.161-0.36-0.36V2c0-0.199,0.161-0.36,0.36-0.36h30	c0.199,0,0.36,0.161,0.36,0.36v22C31.36,24.199,31.199,24.36,31,24.36z M25.36,23.64h5.279V2.36H1.36v21.28h5.28V23	c0-3.839,2.646-7.324,6.405-8.591c-1.468-0.979-2.378-2.638-2.378-4.437c0-2.94,2.392-5.333,5.333-5.333	c2.94,0,5.333,2.392,5.333,5.333c0,1.799-0.91,3.458-2.378,4.437c3.759,1.267,6.405,4.752,6.405,8.591V23.64z M7.359,23.64h17.28V23	c0-3.793-2.819-7.214-6.704-8.135c-0.15-0.035-0.261-0.163-0.275-0.316c-0.015-0.154,0.071-0.3,0.212-0.363	c1.665-0.741,2.74-2.395,2.74-4.213c0-2.543-2.069-4.613-4.612-4.613s-4.613,2.069-4.613,4.613c0,1.818,1.076,3.473,2.741,4.213	c0.141,0.063,0.226,0.209,0.212,0.363c-0.014,0.153-0.125,0.281-0.275,0.316C10.18,15.785,7.36,19.207,7.36,23v0.64H7.359z"></path>
</svg>