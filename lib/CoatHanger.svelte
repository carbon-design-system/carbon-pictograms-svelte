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
  <path d="M29.38,23.114l-13.02-9.3V11.34c1.684-0.18,3-1.61,3-3.341c0-1.853-1.508-3.36-3.36-3.36	S12.64,6.147,12.64,8h0.72c0-1.456,1.185-2.64,2.64-2.64c1.456,0,2.64,1.185,2.64,2.64s-1.184,2.64-2.64,2.64	c-0.199,0-0.36,0.161-0.36,0.36v2.814l-13.02,9.3c-0.614,0.438-0.98,1.151-0.98,1.905c0,1.291,1.05,2.341,2.34,2.341h24.04	c1.291,0,2.341-1.05,2.341-2.341C30.36,24.265,29.994,23.553,29.38,23.114z M28.02,26.64H3.98c-0.894,0-1.621-0.727-1.621-1.62	c0-0.522,0.254-1.016,0.679-1.319L16,14.442L28.962,23.7c0.425,0.304,0.678,0.797,0.678,1.319	C29.64,25.913,28.913,26.64,28.02,26.64z"></path>
</svg>