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
  <path d="M22.5,31.36c-0.092,0-0.185-0.035-0.255-0.105	l-2.982-2.982c-0.401-0.402-0.623-0.937-0.623-1.505s0.222-1.103,0.623-1.505c0.805-0.803,2.205-0.803,3.01,0l0.228,0.229	l0.228-0.229c0.805-0.803,2.205-0.803,3.01,0c0.829,0.83,0.829,2.18,0,3.01l-2.982,2.982C22.685,31.325,22.592,31.36,22.5,31.36z M20.768,25.359c-0.376,0-0.729,0.146-0.995,0.413c-0.267,0.266-0.413,0.619-0.413,0.995s0.146,0.729,0.413,0.995l2.728,2.729	l2.728-2.729c0.549-0.549,0.549-1.441,0-1.99s-1.441-0.549-1.99,0l-0.482,0.482c-0.141,0.141-0.369,0.141-0.51,0l-0.482-0.482	C21.497,25.506,21.144,25.359,20.768,25.359z M31.36,31h-0.72c0-5.442-3.42-10.432-8.46-12.784l0.051,0.061l-6,5	c-0.134,0.111-0.327,0.111-0.461,0l-6-5l0.051-0.061C4.78,20.567,1.36,25.558,1.36,31H0.64c0-6.46,4.574-12.312,11.002-14.248	c-2.634-1.539-4.291-4.375-4.291-7.465c0-4.768,3.879-8.647,8.648-8.647c4.768,0,8.647,3.879,8.647,8.647	c0,3.09-1.656,5.926-4.29,7.465C26.786,18.688,31.36,24.54,31.36,31z M10.477,17.929L16,22.531l5.523-4.603	c-0.72-0.295-1.469-0.537-2.243-0.721c-0.15-0.036-0.261-0.163-0.275-0.317c-0.015-0.153,0.071-0.299,0.212-0.362	c2.861-1.273,4.71-4.116,4.71-7.241c0-4.371-3.556-7.927-7.927-7.927c-4.372,0-7.928,3.556-7.928,7.927	c0,3.125,1.849,5.968,4.711,7.241c0.141,0.063,0.226,0.209,0.212,0.362c-0.014,0.154-0.125,0.281-0.275,0.317	C11.945,17.392,11.196,17.634,10.477,17.929z M12,28.36H6v-0.72h6V28.36z"></path>
</svg>