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
  <path d="M10,31.36H1c-0.199,0-0.36-0.161-0.36-0.36v-9	c0-0.154,0.097-0.286,0.234-0.337l9.99-3.996l4.788-16.758C15.692,0.754,15.833,0.64,16,0.64h15c0.199,0,0.36,0.161,0.36,0.36v15	c0,0.167-0.114,0.308-0.269,0.348l-16.759,4.789l-3.996,9.989C10.286,31.263,10.154,31.36,10,31.36z M1.36,30.64h8.28v-8.28H1.36	V30.64z M10.36,22.271v6.859l3.098-7.744L10.36,22.271z M2.869,21.64h6.859l0.885-3.098L2.869,21.64z M11.459,18.204l-0.935,3.271	l3.271-0.935l1.558-3.895L11.459,18.204z M16.244,16.36l-1.572,3.931L28.43,16.36H16.244z M15.64,3.57l-3.931,13.759l3.931-1.573	V3.57z M16.36,15.64h14.28V1.36H16.36V15.64z"></path>
</svg>