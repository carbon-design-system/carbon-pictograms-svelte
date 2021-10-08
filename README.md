# carbon-pictograms-svelte

[![NPM][npm]][npm-url]
![GitHub](https://img.shields.io/github/license/ibm/carbon-pictograms-svelte?color=262626&style=for-the-badge)
![npm downloads to date](https://img.shields.io/npm/dt/carbon-pictograms-svelte?color=262626&style=for-the-badge)

> [Carbon Design System](https://github.com/carbon-design-system) SVG pictograms as Svelte components.

This zero dependency library builds [Carbon Design System pictograms](https://www.carbondesignsystem.com/guidelines/pictograms/library) as Svelte components. Although best paired with [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte), this library can be consumed standalone.

Try it in the [Svelte REPL](https://svelte.dev/repl/88b99674d0f24a3a8948d3760f8ba999).

## [Preview](https://carbon-pictograms-svelte.onrender.com/) · [Pictogram Index](PICTOGRAM_INDEX.md)

## Installation

Install `carbon-pictograms-svelte` as a development dependency.

**Yarn**

```sh
yarn add -D carbon-pictograms-svelte
```

**NPM**

```sh
npm i -D carbon-pictograms-svelte
```

**pnpm**

```sh
pnpm i -D carbon-pictograms-svelte
```

## Usage

### Base Import

```svelte
<script>
  import { Airplane } from "carbon-pictograms-svelte";
</script>

<Airplane />
```

### Direct Import (recommended)

Import pictograms directly for faster compiling.

```js
import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
```

**Note:** Even if using the base import method, an application bundler like Rollup or webpack should [tree shake](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking) unused imports.

#### Import Path Pattern

```js
import Pictogram from "carbon-pictograms-svelte/lib/<ModuleName>.svelte";
```

Refer to [PICTOGRAM_INDEX.md](PICTOGRAM_INDEX.md) for a list of available pictograms.

## API

### Props

`$$restProps` are forwarded to the `svg` element.

| Name     | Value                             |
| :------- | :-------------------------------- |
| tabindex | `string` (default: `undefined`)   |
| fill     | `string` (default: `currentColor` |

## Recipes

### Custom Fill Color

Customize the fill color using the `fill` prop or by defining a global class.

#### `fill` prop

```svelte
<Airplane fill="blue" />
```

#### Global class

```svelte
<style>
  :global(svg.custom-class) {
    fill: blue;
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

## TypeScript support

Svelte version 3.31 or greater is required to use this library with TypeScript.

## [Changelog](CHANGELOG.md)

## [Contributing](CONTRIBUTING.md)

## Deploying

The pictogram preview is deployed to [Render](https://render.com) as a Static Site. See [render.yaml](render.yaml) for details.

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/carbon-design-system/carbon-pictograms-svelte)

## License

[Apache-2.0](LICENSE)

[npm]: https://img.shields.io/npm/v/carbon-pictograms-svelte.svg?color=262626&style=for-the-badge
[npm-url]: https://npmjs.com/package/carbon-pictograms-svelte
