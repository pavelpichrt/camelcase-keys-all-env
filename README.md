# camelcase-keys-all-env
> Deeply camelCases object keys.

- Works on all environments where at least ES5 is available (IE9+).
- Works with snake_case, spinal-case (kebab-case) and PascalCase keys
- Supports Arrays and nested objects
- No dependencies
- Browser friendly
    - Tiny in size (<1kB minified)
    - A minified UMD version included (./dist/umd/index.js)

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

## Setup

### Yarn
```bash
$ yarn install camelcase-keys-all-env
```

### NPM
```bash
$ npm install --save camelcase-keys-all-env
```

### Other
- There's a minified UMD version available in `./dist/umd/index.js`

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
