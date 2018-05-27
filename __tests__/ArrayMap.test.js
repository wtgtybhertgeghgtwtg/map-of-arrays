// @flow
import ArrayMap from '../src';

describe('ArrayMap', () => {
  describe('construction', () => {
    it('works without "iterable".', () => {
      expect(() => new ArrayMap()).not.toThrow();
    });

    // READ: `validateIterable` doesn't screw up the constructor.
    it('works with a valid "iterable".', () => {
      const arrayMap = new ArrayMap([['keyOne', [1, 2]]]);
      expect(arrayMap.get('keyOne')).toEqual([1, 2]);
    });

    describe('invariants', () => {
      it('throws if "iterable" is not an iterable.', () => {
        // $FlowFixMe
        expect(() => new ArrayMap({})).toThrow(
          '"iterable" must be an iterable or undefined.',
        );
      });

      it('throws if an element of "iterable" is not a key-value pair.', () => {
        // $FlowFixMe
        expect(() => new ArrayMap([{}])).toThrow(
          'Every element of "iterable" must be a key-value pair.',
        );
      });

      it('throws if a value of a key-value pair of "iterable" is not an Array.', () => {
        // $FlowFixMe
        expect(() => new ArrayMap([['keyOne', 'Not an Array.']])).toThrow(
          'The value of every key-value pair of "iterable" must be an Array.',
        );
      });
    });
  });

  describe('instance methods', () => {
    describe('push', () => {
      it("works if the value doesn't already exist.", () => {
        const key = 'keyOne';
        const arrayMap = new ArrayMap();
        arrayMap.push(key, 1, 2);
        expect(arrayMap.get(key)).toEqual([1, 2]);
      });

      it('works if the value already exists.', () => {
        const key = 'keyOne';
        const arrayMap = new ArrayMap([[key, [1, 2]]]);
        arrayMap.push(key, 3, 4);
        expect(arrayMap.get(key)).toEqual([1, 2, 3, 4]);
      });

      it('returns itself.', () => {
        const key = 'keyOne';
        const arrayMap = new ArrayMap();
        expect(arrayMap.push(key)).toBe(arrayMap);
      });
    });

    describe('set', () => {
      it('throws if "value" is not an Array.', () => {
        const key = 'keyOne';
        const arrayMap = new ArrayMap();
        // $FlowFixMe
        expect(() => arrayMap.set(key, 'Not an Array.')).toThrow(
          '"value" must be an Array.',
        );
      });

      it('returns itself.', () => {
        const key = 'keyOne';
        const arrayMap = new ArrayMap();
        expect(arrayMap.set(key, [])).toBe(arrayMap);
      });
    });
  });
});
