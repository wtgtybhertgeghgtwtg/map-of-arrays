# map-of-arrays

> Make a Map of Arrays.

A `Map` for handling Arrays. Every other package name containing "map" and "array" was taken.

## Install

```
$ yarn add map-of-arrays
```

## Usage

```js
const ArrayMap = require('map-of-arrays');

const arrayMap = new ArrayMap();

arrayMap.push('someKey', 1, 2);

arrayMap.push('someKey', 3, 4);

// Returns [1, 2, 3, 4];
arrayMap.get('someKey');
```

## API

### ArrayMap([iterable])

Returns a new `ArrayMap` instance. Identical to a regular `Map`, with two exceptions: it will throw if given non-Array values, and the existence of `push`.

### .push(key, ...values)

Pushes `values` to the Array under `key`.

#### key

Type: `any`

#### values

Type: `Array`

## License

MIT © Matthew Fernando Garcia
