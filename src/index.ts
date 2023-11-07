class LiquidCache<K, V> extends Map<K, V> {
    private expirationMap = new Map<K, NodeJS.Timeout>();
  
    constructor(private defaultExpiration: number = 60000) {
      super();
    }
  
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
  
    delete(key: K): boolean {
      const timeout = this.expirationMap.get(key);
      if (timeout) {
        clearTimeout(timeout);
        this.expirationMap.delete(key);
      }
  
      return super.delete(key);
    }
  
    // Optionally, you can clear the entire cache and all timeouts
    clear(): void {
      for (const timeout of this.expirationMap.values()) {
        clearTimeout(timeout);
      }
      this.expirationMap.clear();
      super.clear();
    }
  }
  
  export default LiquidCache;
  