# Browser Signature
Browser unique signature (Fingerprint) generator 

This is a simple and tiny (<1kb) package for generating unique user browser signature or fingerprint.

The package allow you to identify user online using their browser unique signature

[![NPM](https://img.shields.io/npm/v/browser-signature.svg)](https://www.npmjs.com/package/browser-signature)

The package have two implementations:

1. Browser unique fingerprint or signature generation using the hash of browser mimeTypes count + userAgent string length + global properties count + screen property values.

    Available in four formats:

* **ES Module**: `dist/browser-signature.m.js`
* **CommonJS**: `dist/browser-signature.js`
* **ModernJS**: `dist/browser-signature.modern.js`
* **UMD**: `dist/browser-signature.umd.js`


2. Radom String generation and persisting in the browser local storage. The same string is return every time by the package from the local storage. 

    Available in four formats:

* **ES Module**: `dist/storage.m.js`
* **CommonJS**: `dist/storage.js`
* **ModernJS**: `dist/storage.modern.js`
* **UMD**: `dist/storage.umd.js`

 

## Install

```
$ npm install --save browser-signature
```

## Usage with Device Unique Features

```js
import browserSignature from 'browser-signature';

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: MjY2NjE4Z3AwMThnbXpvbw=='
```

## From CDN 
    
    <script src="https://cdn.jsdelivr.net/npm/browser-signature@1.0.5/dist/browser-signature.umd.js" ></script>
    or
    <script src="https://unpkg.com/browser-signature@1.0.5/dist/browser-signature.umd.js"></script>
    

## From CDN Usage

```js

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: MuY1NjE9b3swpTknbXpvbw=='
```

## Usage with Local Storage Implementation

```js
import browserSignature from 'browser-signature/dist/storage';

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: po3wmbl6ukeky165ydtaqjqgfn7865gertuxqeydlfn1jixt4idjzd'
```

## From CDN
    
    <script src="https://cdn.jsdelivr.net/npm/browser-signature@1.0.5/dist/storage.umd.js" ></script>
    or
    <script src="https://unpkg.com/browser-signature@1.0.5/dist/storage.umd.js"></script>
    

## From CDN Usage

```js

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: po3wmbl6ukeky165ydtaqjqgfn7865gertuxqeydlfn1jixt4idjzd'
```

## API

### browserSignature()
Returns: `String`


## License

MIT © [Hammed Olalekan Osanyinpeju](https://successtar.github.io)
