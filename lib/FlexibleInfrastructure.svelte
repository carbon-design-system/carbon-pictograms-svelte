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
  <path d="M20.5,12.5c-0.3,0-0.5-0.2-0.5-0.5s0.2-0.5,0.5-0.5S21,11.7,21,12S20.8,12.5,20.5,12.5z M21,19c0-0.3-0.2-0.5-0.5-0.5S20,18.7,20,19s0.2,0.5,0.5,0.5S21,19.3,21,19z M17,18.6h-6v0.7h6V18.6z M17,11.6h-6v0.7h6V11.6z M23.4,10c0-0.2-0.2-0.4-0.4-0.4H9c-0.2,0-0.4,0.2-0.4,0.4v5c0,0.2,0.2,0.4,0.4,0.4h14c0.2,0,0.4-0.2,0.4-0.4V10z M22.6,14.6H9.4	v-4.3h13.3V14.6z M23,16.6H9c-0.2,0-0.4,0.2-0.4,0.4v5c0,0.2,0.2,0.4,0.4,0.4h14c0.2,0,0.4-0.2,0.4-0.4v-5	C23.4,16.8,23.2,16.6,23,16.6z M22.6,21.6H9.4v-4.3h13.3V21.6z M12,4.4c1.1,0,1.6,0.6,1.6,1.6v3h0.7V6c0-1.5-0.9-2.4-2.4-2.4H2.9	l2.4-2.4L4.7,0.7L1.5,4l3.3,3.3l0.5-0.5L2.9,4.4H12z M20.6,1.9V9h0.7V1.9l2.4,2.4l0.5-0.5L21,0.5l-3.3,3.3l0.5,0.5L20.6,1.9z M11.4,30.1V23h-0.7v7.1l-2.4-2.4l-0.5,0.5l3.3,3.3l3.3-3.3l-0.5-0.5L11.4,30.1z M27.3,24.7l-0.5,0.5l2.4,2.4H20	c-1.1,0-1.6-0.6-1.6-1.6v-3h-0.7v3c0,1.5,0.9,2.4,2.4,2.4h9.1l-2.4,2.4l0.5,0.5l3.3-3.3L27.3,24.7z"></path>
</svg>