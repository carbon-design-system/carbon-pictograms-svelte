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
  <path d="M16,31.36c0,0-0.001,0-0.002,0	C7.53,31.359,0.641,24.471,0.64,16.002c0-0.001,0-0.003,0-0.004C0.642,7.529,7.532,0.64,16,0.64c4.211,0,8.031,1.703,10.81,4.457	c0.018,0.012,0.034,0.026,0.051,0.042c0.016,0.016,0.029,0.033,0.042,0.051C29.656,7.968,31.36,11.789,31.36,16	c0,8.469-6.89,15.358-15.358,15.36C16.001,31.36,16.001,31.36,16,31.36z M1.367,16.463c0.24,7.706,6.464,13.93,14.17,14.17	l-2.834-11.336L1.367,16.463z M26.726,6.045L16.543,30.63C24.365,30.344,30.64,23.891,30.64,16	C30.64,12.159,29.153,8.659,26.726,6.045z M2.146,15.915l10.942,2.735c0.129,0.032,0.229,0.134,0.262,0.263l2.736,10.941	L25.94,6.059L2.146,15.915z M16,1.36c-7.891,0-14.343,6.275-14.63,14.097L25.954,5.274C23.34,2.846,19.841,1.36,16,1.36z"></path>
</svg>