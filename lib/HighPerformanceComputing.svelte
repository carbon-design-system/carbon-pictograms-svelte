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
  <path d="M16,30.36C8.082,30.36,1.64,23.918,1.64,16S8.082,1.64,16,1.64S30.36,8.082,30.36,16	S23.918,30.36,16,30.36z M15.445,2.371C8.18,2.664,2.36,8.665,2.36,16c0,7.4,5.925,13.444,13.28,13.636V18.36H9	c-0.122,0-0.235-0.062-0.301-0.163s-0.077-0.23-0.028-0.342L15.445,2.371z M16.36,13.64H23c0.121,0,0.234,0.061,0.302,0.163	c0.066,0.102,0.077,0.23,0.028,0.342l-6.775,15.484C23.82,29.337,29.64,23.335,29.64,16c0-7.401-5.924-13.444-13.28-13.635V13.64z M9.55,17.64H16c0.199,0,0.36,0.161,0.36,0.36v10.279l6.089-13.919H16c-0.199,0-0.36-0.161-0.36-0.36V3.721L9.55,17.64z"></path>
</svg>