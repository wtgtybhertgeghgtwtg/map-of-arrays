// @flow
import invariant from 'assert';
import validateIterable from './validateIterable';

export default class ArrayMap<Key, Value> extends Map<Key, Array<Value>> {
  constructor(iterable?: Iterable<[Key, Array<Value>]>) {
    super(validateIterable(iterable));
  }

  push(key: Key, ...values: Array<Value>) {
    const value = this.get(key) || [];
    // Avoid iteration if `values` can be pushed verbatim.
    return super.set(key, value.length > 0 ? [...value, ...values] : values);
  }

  set(key: Key, value: Array<Value>) {
    invariant(Array.isArray(value), '"value" must be an Array.');
    // $FlowFixMe
    return super.set(key, value);
  }
}
