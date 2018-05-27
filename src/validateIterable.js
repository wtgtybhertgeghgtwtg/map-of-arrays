// @flow
import invariant from 'assert';

export default function* validateIterable<Key, Value>(
  iterable?: Iterable<[Key, Array<Value>]>,
): Iterable<[Key, Array<Value>]> {
  if (typeof iterable === 'undefined') {
    return;
  }
  invariant(
    // $FlowFixMe
    iterable[Symbol.iterator],
    '"iterable" must be an iterable or undefined.',
  );
  for (const value of iterable) {
    invariant(
      Array.isArray(value) && value.length === 2,
      'Every element of "iterable" must be a key-value pair.',
    );
    invariant(
      Array.isArray(value[1]),
      'The value of every key-value pair of "iterable" must be an Array.',
    );
    yield value;
  }
}
