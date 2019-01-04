[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/scss-helpers/README.md)](https://github.com/scriptex/scss-helpers/)

# SCSS Helpers

SCSS helpers for every day usage

This is a WIP repository. For details about the current helpers and tools, please see below.

## Download

You can [download](https://github.com/scriptex/scss-helpers/archive/master.zip) this repository directly or install it via `npm` or `yarn`:

```sh
# later we will have a real name for the package (let's hope so)

npm i https://github.com/scriptex/scss-helpers

# or

yarn add https://github.com/scriptex/scss-helpers
```

## Usage

If installed via `npm` or `yarn`, just `@import` the main file:

```scss
@import 'scss-helpers';
/* or if that does not work */
@import 'scss-helpers/index.scss';
```

If manually downloaded, then copy the `scss-helpers` folder in your application folder and manually import the `index.scss` file or the file that you wish to use.

More details about each file can be found below.

## Helpers

### Grid

This mixins creates grid rules automagically. There are several variables which can be tweaked to match your project's requirement and then the mixin is ready to be used. 

For a quick demo, please see [this pen](https://codepen.io/scriptex/pen/zMebLX).

You can control the size of the grid items on all supported resolutions by using `data-*` attributes.

```scss
@import 'scss-helpers/helpers/grid';
```

Then use the mixin:

```scss
/*
 * @param $items     - Number of grid items
 * @param $gutter    - Gutter between items
 */
@include grid($items, $gutter);
```

### Rainbow

This is a mixin for multiple color stops gradient without blurs and fading between stops.
You can see a demo [here](https://codepen.io/scriptex/pen/pQPKXJ).

To import only this mixin, use

```scss
@import 'scss-helpers/helpers/rainbow';
```

Then use the mixin:

```scss
/*
 * @param $colors    - SCSS Map of colors
 * @param $stops     - SCSS Map of color stops
 * @param $direction - One of 'horizontal' or 'vertical'
 */
@include rainbow($colors, $stops, $direction);
```

---

### Select

This is mixib for cross-browser styling of default (native) select elements.
The mixin is still a work in progress.

---

### Triangle

This is a mixin for triangle shape with rounded corners (or without, it's up to you).
The triangle can also have a gradient background.
You can see a demo [here](https://codepen.io/scriptex/pen/xQgZBg).

To import only this mixin, use

```scss
@import 'scss-helpers/helpers/triangle';
```

Then use the mixin:

```scss
/*
 * @param: $size       - width/height of the triangle. Default: 2rem
 * @param: $background - any valid CSS background declaration. Default: red
 * @param: $radius     - true or false (if false, no radius). Default: true
 */
@include rainbow($size, $background, $radius);
```

---

### Unbreak

This is a mixin which, when included, prevents long text strings from breaking out of their container (and introducing horizontal scrollbars).
For more info, please refer to [this CSS Tricks post](https://css-tricks.com/snippets/css/prevent-long-urls-from-breaking-out-of-container/).

To import only this mixin, use

```scss
@import 'scss-helpers/helpers/unbreak';
```

Then use the mixin:

```scss
/*
 * @param: $hyphens - one of 'none', 'manual' or 'auto'. Default: auto
 */
@include unbreak($hyphens);
```

---

### SVG Loader

This is an animated SVG loader with predefined SVG image embeded into the stylesheet.

To import only this mixin, use

```scss
@import 'scss-helpers/helpers/loader';
```

Then use the mixin:

```scss
/*
 * @param: $loader     - SVG image code. Defaults to [this](https://github.com/scriptex/scss-helpers/blob/master/helpers/_loader.scss#L3)
 * @param: $repeat     - background-repeat property. Default: no-repeat
 * @param: $position   - background-position property. Default: 50% 50%
 * @param: $size       - background-size property. Default: 2rem 2rem
 */
@include loader($loader, $repeat, $position, $size);
```

## Tools

---

### Hover media query

This is a(n experimental) media query for detecting devices which support hover.
Since IE does not support this, the hover will work in any version of IE (above 9 of course) which makes the hover media just noise.

To import only this file, use

```scss
@import 'scss-helpers/tools/hover';
```

Then use the media query:

```scss
@include hover {
	/* your hover state goes here */
}
```

---

### String replace function

A handy function which replaces all occurences of a string in another string.

To import only this file, use

```scss
@import 'scss-helpers/tools/string-replace';
```

Then use the function:

```scss
$string: 'something meaningful';
$search: 'meaningful';
$replace: 'awesome';

$result: str-replace($string, $search, $replace: '');

/*
 * $result should equal to 'something awesome'
 */
```

---

### Mixin for SVG background

This is similar to the `loader` mixin but accepts a valid SVG code as first argument

To import only this mixin, use

```scss
@import 'scss-helpers/tools/svg-background';
```

Then use the mixin:

```scss
/*
 * @param: $svg        - SVG image code
 * @param: $repeat     - background-repeat property. Default: no-repeat
 * @param: $position   - background-position property. Default: 0 0
 * @param: $size       - background-size property. Default: 100% 100%
 */
@include background-svg($svg, $repeat, $position, $size);
```

---

### Mixin for multiple SVG background image

This mixins accepts a list of SVG image codes and returns a `background-image` containing all of the SVGs

To import only this mixin, use

```scss
@import 'scss-helpers/tools/svg-background-multiple';
```

Then use the mixin:

```scss
/*
 * Each parameter is a valid SVG code string
 */
@include multi-background-svg($svg1, $svg2, $svg3, $svg4);
```

---

### Function for converting SVG code to CSS friendly encoded string

This function accepts a valid SVG code as string and returns base64 encoded string.

To import only this function, use

```scss
@import 'scss-helpers/tools/svg-url';
```

Then use the function:

```scss
$svg-image: '<svg xmlns="http://www.w3.org/2000/svg">MORE SVG CODE HERE</svg>';
$svg-string: svg-url($svg-image);
```

---

### Function for easy usage of CSS custom properties

Let's say that you have several CSS custom properties defined:

```css
:root {
	--main-color: #bada55;
	--font-size-base: 1.25rem;
}
```

And you use these custom properties everywhere.
Instead of doing this:

```css
body {
	font-size: var(--font-size-base);
	color: var(--main-color);
}
```

you can do this:

```scss
@import 'scss-helpers/tools/v';

body {
	font-size: v(font-size-base);
	color: v(main-color);
}
```

## LICENSE

MIT
