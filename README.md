# carbon-pictograms-svelte

[![NPM][npm]][npm-url]
![GitHub](https://img.shields.io/github/license/ibm/carbon-pictograms-svelte?color=262626&style=for-the-badge)
![npm downloads to date](https://img.shields.io/npm/dt/carbon-pictograms-svelte?color=262626&style=for-the-badge)

> [Carbon Design System](https://github.com/carbon-design-system) SVG pictograms as Svelte components.

This zero dependency library builds [Carbon Design System pictograms](https://www.carbondesignsystem.com/guidelines/pictograms/library) as Svelte components. Although best paired with [carbon-components-svelte](https://github.com/IBM/carbon-components-svelte), this library can be consumed standalone.

Try it in the [Svelte REPL](https://svelte.dev/repl/88b99674d0f24a3a8948d3760f8ba999).

## [Preview](https://carbon-pictograms-svelte.onrender.com/) · [Pictogram Index](PICTOGRAM_INDEX.md)

## Installation

```sh
# npm
npm i carbon-pictograms-svelte

# pnpm
pnpm i carbon-pictograms-svelte

# Yarn
yarn add carbon-pictograms-svelte

# Bun
bun add carbon-pictograms-svelte
```

## Usage

### Direct Import

Import the icon from the `carbon-pictograms-svelte/lib` folder. See the [Pictogram Index](PICTOGRAM_INDEX.md) for a list of supported pictograms.

```svelte
<script>
  import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
</script>

<Airplane />
```

### Base Import with Preprocessor

> [!TIP]
> Use [optimizeImports](https://github.com/carbon-design-system/carbon-preprocess-svelte#optimizeimports) from [carbon-preprocess-svelte](https://github.com/carbon-design-system/carbon-preprocess-svelte) to speed up development times.

Due to the size of the library, importing directly from the barrel file may result in slow development times, since the entire barrel file is imported (thousands of pictograms).

[optimizeImports](https://github.com/carbon-design-system/carbon-preprocess-svelte#optimizeimports) is a Svelte preprocessor that optimizes import paths from Carbon Svelte libraries. It enables you to use the barrel file import syntax without importing the entire library.

For example, the following is automatically re-written by `optimizeImports`:

```diff
- import { Airplane } from "carbon-pictograms-svelte";
+ import Airplane from "carbon-pictograms-svelte/lib/Airplane.svelte";
```

This offers the best of both worlds:

- Concise import syntax
- Fast development times (only the icons you need are imported)

## API

All props are optional.

| Name  | Type     | Default value |
| :---- | :------- | :------------ |
| title | `string` | `undefined`   |

### Custom props

`$$restProps` are forwarded to the `svg` element.

You can use `fill` to customize the color or pass any other valid `svg` attribute to the component.

```svelte
<Airplane fill="red" class="icon" />
```

### Labelled

```svelte
<Airplane aria-label="Airplane" />
```

### Labelled by

```svelte
<label id="transportation">Transportation</label>
<Airplane aria-labelledby="transportation" />
```

### Focusable

```svelte
<Airplane tabindex={0} />
```

## [Changelog](CHANGELOG.md)

## [Contributing](CONTRIBUTING.md)

## License

[Apache-2.0](LICENSE)

[npm]: https://img.shields.io/npm/v/carbon-pictograms-svelte.svg?color=262626&style=for-the-badge
[npm-url]: https://npmjs.com/package/carbon-pictograms-svelte
