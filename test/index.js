const assert = require('assert');
const LiquidCache = require('../src').LiquidCache;

describe('LiquidCache', () => {
    let cache;

    beforeEach(() => {
        cache = new LiquidCache();
    });

    it('should store a value', () => {
        cache.set('key', 'value');
        assert.strictEqual(cache.get('key'), 'value');
    });

    it('should remove a value', () => {
        cache.set('key', 'value');
        cache.remove('key');
        assert.strictEqual(cache.get('key'), undefined);
    });

    it('should clear all values', () => {
        cache.set('key1', 'value1');
        cache.set('key2', 'value2');
        cache.removeAll();
        assert.deepStrictEqual(cache.getAll(), []);
    });

    it('should automatically delete a value after a timeout', (done) => {
        cache.set('key', 'value', 500);
        setTimeout(() => {
            assert.strictEqual(cache.get('key'), undefined);
            done();
        }, 600);
    });

    it('should return all values', () => {
        cache.set('key1', 'value1');
        cache.set('key2', 'value2');
        assert.deepStrictEqual(cache.getAll(), [['key1', 'value1'], ['key2', 'value2']]);
    });

    it('should update interval', () => {
        cache.setInterval(5000);
        assert.deepStrictEqual(cache.interval, 5000);
    });
});
