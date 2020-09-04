# carbon-pictograms-svelte

[![NPM][npm]][npm-url]
[![carbon-pictograms-svelte Travis CI build status][build]][build-badge]

> [Carbon Design System](https://github.com/carbon-design-system) SVG pictograms as Svelte components.

This **zero dependency** library builds [Carbon Design System pictograms](https://www.carbondesignsystem.com/guidelines/pictograms/library) as Svelte components. Although best paired with [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte), this library can be consumed standalone.

Try it in the [Svelte REPL](https://svelte.dev/repl/88b99674d0f24a3a8948d3760f8ba999?version=3.24.1).

## [Preview](https://ibm.github.io/carbon-pictograms-svelte/)

## Getting Started

`carbon-pictograms-svelte` can be installed using `yarn` or `npm`.

```bash
yarn add -D carbon-pictograms-svelte
# OR
npm i -D carbon-pictograms-svelte
```

## Usage

### Base Import

```html
<script>
  import { Airplane } from "carbon-pictograms-svelte";
</script>

<Airplane />
```

### Direct Import (recommended)

Import pictograms directly for faster compiling.

```js
import Airplane from "carbon-pictograms-svelte/lib/Airplane";
```

**Note:** Even if using the base import method, an application bundler like Rollup or Webpack should treeshake unused pictograms from the production build.

#### Import Path Pattern

```js
import Pictogram from "carbon-pictograms-svelte/lib/<ModuleName>";
```

Refer to [PICTOGRAM_INDEX.md](PICTOGRAM_INDEX.md) for a list of available pictograms.

## API

### Props

All props are optional.

| Name            | Value                               |
| :-------------- | :---------------------------------- |
| id              | `string`                            |
| aria-label      | `string`                            |
| aria-labelledby | `string`                            |
| tabindex        | `string`                            |
| title           | `string`                            |
| focusable       | `boolean` (default: `false`)        |
| class           | `string`                            |
| style           | `string`                            |
| fill            | `string` (default: `"#161616"`      |
| stroke          | `string` (default `"currentColor"`) |
| width           | `string` (default: `"48"`)          |
| height          | `string` (default: `"48"`)          |

#### `title` as a Slot

`title` can be passed as a prop or through the slot as an element.

```html
<Airplane title="Airplane" />
<!-- OR -->
<Airplane>
  <title>Airplane</title>
</Airplane>
```

### Forwarded Events

Event directives are forwarded to the SVG element.

```html
<Airplane
  on:click="{() => {}}"
  on:mouseenter="{() => {}}"
  on:mouseover="{() => {}}"
  on:mouseleave="{() => {}}"
  on:keyup="{() => {}}"
  on:keydown="{() => {}}"
/>
```

### `data-carbon-pictogram` selector

Each pictogram embeds its module name in the `data-carbon-pictogram` selector for querying. This may be useful for automated testing in a headless browser.

```html
<svg data-carbon-pictogram="Airplane">...</svg>
```

```js
// selects all carbon pictograms
document.querySelectorAll("[data-carbon-pictogram]");

// selects all `Airplane` pictograms
document.querySelectorAll('[data-carbon-pictogram="Airplane"]');
```

## Recipes

### Custom Stroke Color

Customize the stroke color through the `stroke` proop or by defining a global class.

#### `stroke` prop

```html
<Airplane stroke="blue" />
```

#### Global class

```html
<style>
  :global(svg.custom-class) {
    stroke: blue;
  }
</style>

<Airplane class="custom-class" />
```

### Labelled

```html
<Airplane aria-label="Airplane" />
```

### Labelled with Focus

```html
<Airplane aria-label="Airplane" tabindex="0" />
```

### Labelled by

```html
<label id="transportation">Transportation</label>

<Airplane aria-labelledby="transportation" />
```

## Examples

- [examples/webpack](examples/webpack) (Try it on [CodeSandbox](https://codesandbox.io/s/github/IBM/carbon-pictograms-svelte/tree/master/examples/webpack))

- [examples/rollup](examples/rollup) (Try it on [CodeSandbox](https://codesandbox.io/s/github/IBM/carbon-pictograms-svelte/tree/master/examples/rollup))

- [examples/rollup-typescript](examples/rollup-typescript)

## [Changelog](CHANGELOG.md)

## [Contributing](CONTRIBUTING.md)

## License

[Apache-2.0](LICENSE)

[npm]: https://img.shields.io/npm/v/carbon-pictograms-svelte.svg?color=blue
[npm-url]: https://npmjs.com/package/carbon-pictograms-svelte
[build]: https://travis-ci.com/ibm/carbon-pictograms-svelte.svg?branch=master
[build-badge]: https://travis-ci.com/ibm/carbon-pictograms-svelte
