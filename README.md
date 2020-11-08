# Browser Signature
Browser unique signature (Fingerprint) generator

This is a simple and tiny (<1kb) package for generating unique user browser signature or fingerprint.

The package allow you to identify user online using their browser unique signature

The browser unique fingerprint or signature is generated using the hash of browser mimeTypes count + userAgent string length + global properties count + screen property values


Available in four formats:

* **ES Module**: `dist/browser-signature.m.js`
* **CommonJS**: `dist/browser-signature.js`
* **ModernJS**: `dist/browser-signature.modern.js`
* **UMD**: `dist/browser-signature.umd.js`


## Install

```
$ npm install --save browser-signature
```

## Install Usage

```js
import browserSignature from 'browser-signature';

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: MjY2NjE4Z3AwMThnbXpvbw=='
```

## From CDN
    
    <script src="https://cdn.jsdelivr.net/npm/browser-signature@1.0.4/dist/browser-signature.umd.js" ></script>
    or
    <script src="https://unpkg.com/browser-signature@1.0.4/dist/browser-signature.umd.js"></script>
    

## From CDN Usage

```js

const signature = browserSignature();

console.log("Current Browser Unique Signature: ", signature);
 // Result will look like => 'Current Browser Unique Signature: MuY1NjE9b3swpTknbXpvbw=='
```

## API

### browserSignature()
Returns: `String`


## License

MIT © [Hammed Olalekan Osanyinpeju](https://successtar.github.io)
