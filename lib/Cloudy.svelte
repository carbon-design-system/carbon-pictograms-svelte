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
  <path d="M25.76,27.36H7.357c-2.601,0-4.717-2.128-4.717-4.742s2.116-4.741,4.717-4.741	c0.645,0,1.283,0.134,1.874,0.389c0.609-3.812,3.88-6.625,7.81-6.625c3.176,0,5.983,1.84,7.243,4.717	c0.485-0.134,0.98-0.201,1.477-0.201c3.088,0,5.601,2.513,5.601,5.602S28.848,27.36,25.76,27.36z M7.357,18.598	c-2.204,0-3.997,1.804-3.997,4.021c0,2.218,1.793,4.021,3.997,4.021H25.76c2.691,0,4.88-2.189,4.88-4.882s-2.188-4.882-4.88-4.882	c-0.527,0-1.056,0.088-1.568,0.263c-0.186,0.062-0.382-0.032-0.452-0.211c-1.08-2.775-3.71-4.568-6.699-4.568	c-3.731,0-6.808,2.789-7.158,6.488c-0.012,0.121-0.084,0.229-0.192,0.285c-0.11,0.057-0.24,0.053-0.345-0.007	C8.739,18.78,8.052,18.598,7.357,18.598z M1.394,18.195C0.9,17.428,0.64,16.537,0.64,15.619c0-2.614,2.116-4.741,4.717-4.741	c0.644,0,1.283,0.133,1.874,0.388c0.609-3.812,3.88-6.625,7.81-6.625c3.176,0,5.983,1.84,7.243,4.717	c0.485-0.134,0.98-0.201,1.477-0.201c3.088,0,5.601,2.513,5.601,5.602H28.64c0-2.692-2.188-4.882-4.88-4.882	c-0.527,0-1.056,0.088-1.568,0.263c-0.187,0.064-0.382-0.031-0.452-0.21c-1.08-2.775-3.709-4.568-6.699-4.568	c-3.731,0-6.809,2.789-7.159,6.487c-0.012,0.122-0.084,0.229-0.192,0.286c-0.108,0.058-0.237,0.054-0.344-0.007	c-0.606-0.346-1.294-0.529-1.988-0.529c-2.204,0-3.997,1.804-3.997,4.021c0,0.78,0.221,1.537,0.639,2.188L1.394,18.195z"></path>
</svg>