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
  <path d="M22,31.36h-2.5c-1.025,0-1.86-0.835-1.86-1.86V18c0-0.75,0.61-1.36,1.36-1.36h7.369	c2.473-0.032,4.271-1.706,4.271-3.982c0-2.37-1.916-4.298-4.271-4.298c-0.742,0-1.478,0.196-2.125,0.565L23.76,9.202l-0.053-0.556	c-0.38-4.018-3.805-7.287-7.634-7.287c-3.092,0-5.963,2.038-7.144,5.07L8.804,6.751L8.478,6.64C7.992,6.475,7.209,6.36,6.574,6.36	c-2.875,0-5.214,2.339-5.214,5.214c0,2.81,2.292,5.035,5.218,5.066H8v0.72H6.574c-3.329-0.036-5.934-2.577-5.934-5.787	c0-3.272,2.662-5.934,5.934-5.934c0.501,0,1.211,0.069,1.811,0.223c1.358-3.137,4.408-5.223,7.689-5.223	c4.024,0,7.639,3.285,8.286,7.422c0.633-0.277,1.318-0.422,2.01-0.422c2.752,0,4.991,2.251,4.991,5.018	c0,2.688-2.098,4.665-4.986,4.702H19c-0.353,0-0.64,0.287-0.64,0.64v11.5c0,0.629,0.511,1.14,1.14,1.14H22V31.36z M11.5,31.36H9	v-0.72h2.5c0.628,0,1.14-0.511,1.14-1.14V17.828c0-0.432-0.175-0.854-0.48-1.16l-5.414-5.414l0.509-0.509l5.414,5.414	c0.439,0.439,0.691,1.047,0.691,1.668V29.5C13.36,30.525,12.525,31.36,11.5,31.36z"></path>
</svg>