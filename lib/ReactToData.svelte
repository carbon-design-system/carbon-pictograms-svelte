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
  <path d="M31,0.64H1C0.801,0.64,0.64,0.801,0.64,1v30	c0,0.199,0.161,0.36,0.36,0.36h30c0.199,0,0.36-0.161,0.36-0.36V1C31.36,0.801,31.199,0.64,31,0.64z M30.64,30.64H1.636l8.38-13.967	l3.685,5.526c0.067,0.102,0.172,0.157,0.306,0.161c0.123-0.003,0.236-0.067,0.3-0.172l7.547-12.263L22.355,12l0.699-0.169	l-0.789-3.266l-3.267,0.79l0.17,0.7l2.067-0.5l-7.248,11.778L10.299,15.8c-0.068-0.102-0.18-0.144-0.308-0.16	c-0.123,0.003-0.236,0.069-0.3,0.175L1.36,29.7V1.36h29.28C30.64,1.36,30.64,30.64,30.64,30.64z"></path>
</svg>