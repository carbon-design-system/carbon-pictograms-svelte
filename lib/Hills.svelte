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
  <path d="M30.192,29.64L16.36,8.891V5.36h4.509l-1.86-1.86l1.86-1.86H15.64v7.251L1.807,29.64H1v0.721h30V29.64H30.192	z M16.36,2.36h2.771l-1.14,1.14l1.14,1.14H16.36V2.36z M2.673,29.64L8,21.649l5.327,7.99L2.673,29.64L2.673,29.64z M14.193,29.64	L8.433,21L12,15.649l9.327,13.991H14.193z M22.192,29.64L12.433,15L16,9.649L29.327,29.64H22.192z"></path>
</svg>