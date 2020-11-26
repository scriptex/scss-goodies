[![GitHub release](https://img.shields.io/github/release/scriptex/scss-goodies.svg)](https://github.com/scriptex/scss-goodies/releases/latest)
[![GitHub issues](https://img.shields.io/github/issues/scriptex/scss-goodies.svg)](https://github.com/scriptex/scss-goodies/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/scriptex/scss-goodies.svg)](https://github.com/scriptex/scss-goodies/commits/master)
[![npm](https://img.shields.io/npm/dt/scss-goodies.svg)](https://www.npmjs.com/package/scss-goodies)
[![npm](https://img.shields.io/npm/v/scss-goodies.svg)](https://www.npmjs.com/package/scss-goodies)
[![Analytics](https://ga-beacon.appspot.com/UA-83446952-1/github.com/scriptex/scss-goodies/README.md)](https://github.com/scriptex/itscss/)

# SCSS Goodies

> SCSS helpers and tools for every day usage

SCSS Goodies is a growing collection of SASS/SCSS helpers and tools. It can be imported into your existing application and used right away.

SCSS Googies leaves no footprint (no CSS is being generated when you import the library) if you don't use it. This means that you can import the whole library and not be afraid of large compiled CSS file sizes. Power users are free to dig in and import separate file(s) is they feel the need.

For details about the current helpers and tools, please see [the API docs](https://scss-goodies.atanas.info).

## Download

You can [download](https://github.com/scriptex/scss-goodies/archive/master.zip) this repository directly or install it via `npm` or `yarn`:

```sh
npm i scss-goodies

# or

yarn add scss-goodies
```

## Usage

If installed via `npm` or `yarn`, just `@import` the main file:

```scss
@import 'scss-goodies';
/* or if that does not work */
@import 'scss-goodies/src/index.scss';
/* if you're in a webpack context, prepend a ~ in front of the path */
@import '~scss-goodies';
```

If manually downloaded, then copy the `scss-goodies` folder in your application folder and manually import the `index.scss` file or the file that you wish to use.

## Details

More details about usage, configuration and implementation can be found in the [documentation](https://scss-goodies.atanas.info).

## Support this project

[![Tweet](https://img.shields.io/badge/Tweet-Share_this_repository-blue.svg?style=flat-square&logo=twitter&color=38A1F3)](https://twitter.com/intent/tweet?text=Checkout%20this%20awesome%20software%20project%3A&url=https%3A%2F%2Fgithub.com%2Fscriptex%2Fscss-goodies&via=scriptexbg&hashtags=software%2Cgithub%2Ccode%2Cawesome)
[![Donate](https://img.shields.io/badge/Donate-Support_me_on_PayPal-blue.svg?style=flat-square&logo=paypal&color=222d65)](https://www.paypal.me/scriptex)
[![Become a Patron](https://img.shields.io/badge/Become_Patron-Support_me_on_Patreon-blue.svg?style=flat-square&logo=patreon&color=e64413)](https://www.patreon.com/atanas)

## LICENSE

MIT
