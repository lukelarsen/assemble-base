[PostCSS]:                 https://github.com/postcss/postcss
[Assemble]:                http://assemblecss.com
[autoprefixer]:            https://github.com/postcss/autoprefixer
[postcss-arrow-boxes]:     https://github.com/lukelarsen/postcss-arrow-boxes
[postcss-at2x]:            https://github.com/simonsmith/postcss-at2x
[postcss-clearfix]:        https://github.com/seaneking/postcss-clearfix
[postcss-conditionals]:    https://github.com/andyjansson/postcss-conditionals
[postcss-each]:            https://github.com/outpunk/postcss-each
[postcss-font-magician]:   https://github.com/jonathantneal/postcss-font-magician
[postcss-hidden]:          https://github.com/lukelarsen/postcss-hidden
[postcss-map]:             https://github.com/pascalduez/postcss-map
[postcss-partial-import]:  https://github.com/jonathantneal/postcss-partial-import
[postcss-position]:        https://github.com/seaneking/postcss-position
[postcss-responsive-type]: https://github.com/seaneking/postcss-responsive-type
[postcss-show-scrollbars]: https://github.com/lukelarsen/postcss-show-scrollbars
[postcss-simple-vars]:     https://github.com/postcss/postcss-simple-vars
[postcss-size]:            https://github.com/postcss/postcss-size
[Assemble Buttons]:        https://github.com/lukelarsen/assemble-buttons
[Assemble Code]:           https://github.com/lukelarsen/assemble-code
[Assemble Forms]:          https://github.com/lukelarsen/assemble-forms
[Assemble Icons]:          https://github.com/lukelarsen/assemble-icons
[Assemble Lists]:          https://github.com/lukelarsen/assemble-lists
[Assemble Media]:          https://github.com/lukelarsen/assemble-media
[Assemble Modals]:         https://github.com/lukelarsen/assemble-modals
[Assemble Navs]:           https://github.com/lukelarsen/assemble-navs
[Assemble Notifications]:  https://github.com/lukelarsen/assemble-notifications
[Assemble Tables]:         https://github.com/lukelarsen/assemble-tables
[Assemble Tips]:           https://github.com/lukelarsen/assemble-tips
[Assemble Grids]:          https://github.com/lukelarsen/postcss-assemble-grids

# Assemble Base
Assemble Base contains all the needed parts of the [Assemble] Framework. The Assemble Framework is a CSS framework that uses [PostCSS]. There are many optional components you can install to your project once Assemble Core as been added. Here is the full list of available components:
- [Assemble Buttons]
- [Assemble Code]
- [Assemble Forms]
- [Assemble Icons]
- [Assemble Lists]
- [Assemble Media]
- [Assemble Modals]
- [Assemble Navs]
- [Assemble Notifications]
- [Assemble Tables]
- [Assemble Tips]
- [Assemble Grids]

## Installation
npm install assemble-base --save-dev

## Usage
### Gulp
```js
var gulp = require('gulp');
var postcss = require('gulp-postcss');
var assembleBase = require('assemble-base');

gulp.task('css', function () {
    var processors = [
        assembleCore
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

You will then need to create a base CSS to load everything from. You can structure your app however you like. Just make sure your css imports are in this order.
```css
@import '../node_modules/assemble-base/base';

/*
Override the Assemble defaults here
*/

/* The other Assemble Components you are using */
@import '../node_modules/assemble-modals/assemble-modals';
@import '../node_modules/assemble-buttons/assemble-buttons';

/* The rest of your css and/or imports. */
```

## Options

### Constants
You can load a constants file where you can use json to define things. Then refer to them in your css. In gulp tell us where your file is and what it is called. This uses [postcss-map].
```js
gulp.task('css', function () {
    var processors = [
        assembleBase({
            basePath: 'stylesheets/',
            maps: [ 'constants.json' ]
        })
    ];

    return gulp.src('./stylesheets/screen.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```
Sample Constants file
```js
{
    "zIndexes": {
        "modal": 99,
        "modalInner": -1,
        "modalInnerVisible": 100,
        "modalClose": 2,
        "notification": 10,
        "tip": 11,
    },
    "mediaQueries": {
        "palm": "only screen and (max-width: 480px)",
        "lap": "only screen and (min-width: 481px) and (max-width: 1023px)",
        "lapAndUp": "only screen and (min-width: 481px)",
        "portable": "only screen and (max-width: 1023px)",
        "desk": "only screen and (max-width: 1024px)",
        "wide": "only screen and (min-width:1500px)"
    }
}
```
Usage in css
```css
z-index: map(constants, zIndexes, modalInner);
```
This returns
```css
z-index: -1;
```

## What comes with Assemble?

### PostCSS plugins
There are a bunch of [PostCSS] plugins that come with Assemble Core. Here is the full list. None of these will add CSS to your markup until you use them. Please see their individual Github pages for usage instructions.
- [autoprefixer]
- [postcss-arrow-boxes]
- [postcss-at2x]
- [postcss-clearfix]
- [postcss-conditionals]
- [postcss-each]
- [postcss-font-magician]
- [postcss-hidden]
- [postcss-map]
- [postcss-partial-import]
- [postcss-position]
- [postcss-responsive-type]
- [postcss-show-scrollbars]
- [postcss-simple-vars]
- [postcss-size]

### A CSS Reset
Here is the entire reset included with Assemble.
```css
/*------------------------------------*\
    CONTENTS
\*------------------------------------*/
/**
 *  RESET
 *  NORMALIZE.CSS
*/

/**
 * Credit goes to inuit.css by @csswizardry
 * & Normalize.css
 */





/*------------------------------------*\
    !RESET
\*------------------------------------*/
/**
 * A more considered reset; more of a restart...
 * As per: csswizardry.com/2011/10/reset-restarted
 */

/**
* Let’s make the box model all nice, shall we...?
*/
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}

/**
 * The usual...
 */
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
form,
fieldset,
legend,
table,
th,
td,
caption,
hr{
    margin: 0;
    padding: 0;
}

/**
 * Give a help cursor to elements that give extra info on `:hover`.
 */
abbr[title],
dfn[title]{
    cursor: help;
}

/**
 * Remove underlines from potentially troublesome elements.
 */
u,
ins{
    text-decoration: none;
}

/**
 * Apply faux underline via `border-bottom`.
 */
ins{
    border-bottom: 1px solid;
}

/**
 * So that `alt` text is visually offset if images don’t load.
 */
img{
    border: 0;
    font-style: italic;
}

/**
 * Give form elements some cursor interactions...
 */
label,
input,
textarea,
button,
select,
option{
    cursor: pointer;
}

.text-input:active,
.text-input:focus,
textarea:active,
textarea:focus{
    outline: none;
    cursor: text;
}


time,
.time{
    text-transform: uppercase;
}

ol,
ul,
dl{
    margin-top: 0;
    margin-bottom: em-rhythm(4);
    margin-left: em-rhythm(4);
    padding-top: 0;
    padding-bottom: 0;
}

ul ul,
ol ol,
dl dl{
    margin-left: 0;
}

ul{
    list-style: disc;
}

ol{
    list-style: decimal;
}

abbr{
    font-variant: small-caps; /* https://developer.mozilla.org/en-US/docs/CSS/font-variant */
    font-weight: 600;
    text-transform: lowercase;
}

abbr[title]:hover{
    cursor: help; /* cursor changed to a question mark when it has a title */
}

em{
    font-style: italic;
}

b,
strong{
    font-weight: bold;
}





/*------------------------------------*\
    !NORMALIZE.CSS
\*------------------------------------*/

/*! normalize.css v2.1.0 | MIT License | git.io/normalize */

/* ==========================================================================
   HTML5 display definitions
   ========================================================================== */

/*
 * Correct `block` display not defined in IE 8/9.
 */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary{
    display: block;
}

/*
 * Correct `inline-block` display not defined in IE 8/9.
 */

audio,
canvas,
video{
    display: inline-block;
}

/*
 * Prevent modern browsers from displaying `audio` without controls.
 * Remove excess height in iOS 5 devices.
 */

audio:not([controls]){
    display: none;
    height: 0;
}

/*
 * Address styling not present in IE 8/9.
 */

[hidden]{
    display: none !important;
}


/* ==========================================================================
   Base
   ========================================================================== */

/*
 * 1. Set default font family to sans-serif.
 * 2. Prevent iOS text size adjust after orientation change, without disabling
 *    user zoom.
 */

html{
    font-family: sans-serif; /* 1 */
    -ms-text-size-adjust: 100%; /* 2 */
    -webkit-text-size-adjust: 100%; /* 2 */
}


/* ==========================================================================
   Links
   ========================================================================== */

/*
 * Improve readability when focused and also mouse hovered in all browsers.
 */

a,
a:active,
a:hover{
    outline: 0;
}


/* ==========================================================================
   Typography
   ========================================================================== */

/*
 * Address styling not present in IE 8/9, Safari 5, and Chrome.
 */

abbr[title]{
    border-bottom: 1px dotted;
}


/*
 * Address styling not present in Safari 5 and Chrome.
 */

dfn{
    font-style: italic;
}


/*
 * Address differences between Firefox and other browsers.
 */

hr{
    height: 0;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
}


/*
 * Address styling not present in IE 8/9.
 */

mark{
    background: #FF0;
    color: #000;
}


/*
 * Improve readability of pre-formatted text in all browsers.
 */

pre{
    white-space: pre-wrap;
}


/*
 * Set consistent quote types.
 */

q{
    quotes: '\201C' '\201D' '\2018' '\2019';
}


/*
 * Prevent `sub` and `sup` affecting `line-height` in all browsers.
 */

sub,
sup{
    position: relative;
    font-size: 75%;
    line-height: 0;
    vertical-align: baseline;
}

sup{
    top: -0.5em;
}

sub{
    bottom: -0.25em;
}


/* ==========================================================================
   Embedded content
   ========================================================================== */

/*
 * Remove border when inside `a` element in IE 8/9.
 */



/*
 * Correct overflow displayed oddly in IE 9.
 */

svg:not(:root){
    overflow: hidden;
}


/* ==========================================================================
   Figures
   ========================================================================== */

/*
 * Address margin not present in IE 8/9 and Safari 5.
 */

figure{
    margin: 0;
}


/* ==========================================================================
   Forms
   ========================================================================== */

/*
 * Define consistent border, margin, and padding.
 */

fieldset{
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
    border: 1px solid #C0C0C0;
}

/*
 * 1. Correct `color` not being inherited in IE 8/9.
 * 2. Remove padding so people aren't caught out if they zero out fieldsets.
 */

legend{
    padding: 0; /* 2 */
    border: 0; /* 1 */
}

/*
 * 1. Correct font family not being inherited in all browsers.
 * 2. Correct font size not being inherited in all browsers.
 * 3. Address margins set differently in Firefox 4+, Safari 5, and Chrome.
 */

button,
input,
select,
textarea{
    margin: 0; /* 3 */
    font-family: inherit; /* 1 */
    font-size: 100%; /* 2 */
}

/*
 * Address Firefox 4+ setting `line-height` on `input` using `!important` in
 * the UA stylesheet.
 */

button,
input{
    line-height: normal;
}

/*
 * Address inconsistent `text-transform` inheritance for `button` and `select`.
 * All other form control elements do not inherit `text-transform` values.
 * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.
 * Correct `select` style inheritance in Firefox 4+ and Opera.
 */

button,
select{
    text-transform: none;
}

/*
 * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`
 *    and `video` controls.
 * 2. Correct inability to style clickable `input` types in iOS.
 * 3. Improve usability and consistency of cursor style between image-type
 *    `input` and others.
 */

button,
html input[type='button'], /* 1 */
input[type='reset'],
input[type='submit']{
    cursor: pointer; /* 3 */
    -webkit-appearance: button; /* 2 */
}

/*
 * Re-set default cursor for disabled elements.
 */

button[disabled],
html input[disabled]{
    cursor: default;
}

/*
 * 1. Address box sizing set to `content-box` in IE 8/9.
 * 2. Remove excess padding in IE 8/9.
 */

input[type='checkbox'],
input[type='radio']{
    padding: 0; /* 2 */
    box-sizing: border-box; /* 1 */
}

/*
 * 1. Address `appearance` set to `searchfield` in Safari 5 and Chrome.
 * 2. Address `box-sizing` set to `border-box` in Safari 5 and Chrome
 *    (include `-moz` to future-proof).
 */

input[type='search']{
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
}

/*
 * Remove inner padding and search cancel button in Safari 5 and Chrome
 * on OS X.
 */

input[type='search']::-webkit-search-cancel-button,
input[type='search']::-webkit-search-decoration{
    -webkit-appearance: none;
}

/*
 * Remove inner padding and border in Firefox 4+.
 */

button::-moz-focus-inner,
input::-moz-focus-inner{
    padding: 0;
    border: 0;
}

/*
 * 1. Remove default vertical scrollbar in IE 8/9.
 * 2. Improve readability and alignment in all browsers.
 */

textarea{
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
}


/* ==========================================================================
   Tables
   ========================================================================== */

/*
 * Remove most spacing between table cells.
 */

table{
    border-collapse: collapse;
    border-spacing: 0;
}
```
