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
  <path d="M16.358,30.04l-0.716-0.08l1-9c0.021-0.182,0.174-0.32,0.358-0.32c2.007,0,3.64-1.633,3.64-3.64	c0-1.387-0.771-2.635-2.012-3.257c-0.064-0.032-0.117-0.083-0.152-0.146c-0.029-0.051-1.788-3.135-1.788-3.135	C16.223,9.67,15.75,9.36,15,9.36h-0.559c-0.707,0-1.332,0.451-1.556,1.122l-1.43,4.291l5.659,1.886l-0.228,0.683l-6-2	c-0.188-0.062-0.291-0.267-0.228-0.455l1.544-4.632c0.322-0.965,1.222-1.614,2.239-1.614H15c1.289,0,1.912,0.782,2.311,1.462	c1.105,1.938,1.546,2.71,1.722,3.039C20.471,13.9,21.361,15.37,21.361,17c0,2.295-1.783,4.182-4.037,4.348L16.358,30.04z M13.36,30	h-0.72V18h0.72V30z M15,7.36c-1.577,0-2.86-1.283-2.86-2.86S13.423,1.64,15,1.64s2.86,1.283,2.86,2.86S16.577,7.36,15,7.36z M15,2.36c-1.18,0-2.14,0.96-2.14,2.14S13.82,6.64,15,6.64s2.14-0.96,2.14-2.14S16.18,2.36,15,2.36z"></path>
</svg>