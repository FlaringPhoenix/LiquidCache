/**
 * @abstract LiquidCache is an easy-to-setup map-based caching system for Node.js. It allows you to store key-value pairs in memory and configure cache expiration intervals.
 * @author FlaringPhoenix
 * @template K - Type of key
 * @template V - Type of value
 */
class LiquidCache<K, V> extends Map<K, V> {
  private expirationMap = new Map<K, NodeJS.Timeout>();

  /**
   * @constructs LiquidCache
   * @param defaultExpiration Default expiration time in milliseconds (Default: 60000)
   */
  constructor(private defaultExpiration: number = 60000) {
    super();
  }

  /**
   * Sets a key-value pair in the cache
   * @param key Key to set
   * @param value Value to be stored within key
   * @param expiration (Optional) Expiration time in milliseconds (Default: 60000)
   * @returns The cache instance
   */
  set(key: K, value: V, expiration?: number): this {
    // If the key already exists, clear the previous timeout
    if (this.expirationMap.has(key)) {
      clearTimeout(this.expirationMap.get(key)!);
    }

    super.set(key, value);

    const expirationTime = expiration ?? this.defaultExpiration;
    const timeout = setTimeout(() => this.delete(key), expirationTime);
    this.expirationMap.set(key, timeout);

    return this;
  }

  /**
   * Pop's an element from the cache
   * @param key Key to get
   * @returns The value stored within the key
   */
  delete(key: K): boolean {
    const timeout = this.expirationMap.get(key);
    if (timeout) {
      clearTimeout(timeout);
      this.expirationMap.delete(key);
    }

    return super.delete(key);
  }

  /**
   * Clears the entire cache and all timeouts
   */
  clear(): void {
    for (const timeout of this.expirationMap.values()) {
      clearTimeout(timeout);
    }
    this.expirationMap.clear();
    super.clear();
  }
}

export default LiquidCache;
