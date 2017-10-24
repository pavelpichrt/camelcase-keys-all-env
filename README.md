# camelcase-keys-all-env
> Deeply camelCases object keys.

- Works on all environments where at least ES5 is available (IE9+).
- Works with snake_case, kebab-case (spinal-case) and PascalCase keys
- Supports Arrays and nested objects
- No dependencies
- Browser friendly
    - Tiny in size (<1kB minified)
    - A minified version included (./dist/camelcase-keys.min.js)

## Usage

### ES modules
```js
import camelcaseKeys from 'camelcase-keys-all-env'
```

### CommonJS modules
- note the **.default** in the require statement
```js
var camelcaseKeys = require('camelcase-keys-all-env').default
```

### Other environments
> I recommend bundling this package with your application, using Webpack / Browserify /... If you can't / don't want to, you can append it to the "global" context (in case of a browser, it will probably be the Window object)

```js
// Test object
const objStub = {
    'some-very_long-key': 1,
    Other_key_for_good_measure: false,
    nested_key: [
        true,
        {
            'Something_nested-deeply': 'asd',
        },
        false,
        {
            'other-nested-key': {
                deeply_nested_key: true,
            },
        },
    ],
    'yet-another-key': 'value',
}

const camelcaseObj = camelcaseKeys(objStub)
```

#### Browser
- download the minified version of the package from ./dist/camelcase-keys.min.js
- Upload it to your server / CDN
- Add a script element to your page
```html
<!-- ... -->
    <!-- use the async / defer attribute to load the script asynchronously, if you can -->
    <script src="https://somedomain-or-local-path/camelcase-keys.min.js"></script>
    <script>
        var camelcaseKeys = Window.camelcaseKeys.default // note: ".default"

        camelcaseKeys({'a_b_c-d': 4}) // { aBCD: 4 }
    </script>
<!-- ... -->
```

## Setup

### Yarn
```bash
$ yarn add camelcase-keys-all-env
```

### NPM
```bash
$ npm install --save camelcase-keys-all-env
```

## Scripts

### Build
```bash
$ yarn build
```
- Generates a transpiled and minified (Babel) file in the ./dist directory

### Test
```bash
$ yarn test
```
- Runs unit tests

### Lint
```bash
$ yarn lint
```
- Checks the code style (eslint)

### Codestyle
```bash
$ yarn codestyle
```
- Formats the JavaScript source files (uses https://github.com/prettier/prettier)

## License
- MIT
