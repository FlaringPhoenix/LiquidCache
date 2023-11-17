import { expect } from 'chai';
import LiquidCache from '../src';

describe('LiquidCache', () => {
  let cache: LiquidCache<string, any>;

  beforeEach(() => {
    cache = new LiquidCache<string, any>(100);
  });

  it('should set and get a cache entry', done => {
    cache.set('key', 'value');
    expect(cache.get('key')).to.equal('value');
    done();
  });

  it('should respect cache expiration', done => {
    cache.set('key', 'value', 50);
    setTimeout(() => {
      expect(cache.has('key')).to.be.false;
      done();
    }, 70);
  });

  it('should override an existing key', done => {
    cache.set('key', 'value1');
    cache.set('key', 'value2');
    expect(cache.get('key')).to.equal('value2');
    done();
  });

  it('should delete a cache entry', done => {
    cache.set('key', 'value');
    cache.delete('key');
    expect(cache.has('key')).to.be.false;
    done();
  });

  it('should clear all cache entries', done => {
    cache.set('key1', 'value1');
    cache.set('key2', 'value2');
    cache.clear();
    expect(cache.size).to.equal(0);
    done();
  });
});
