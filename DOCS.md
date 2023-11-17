<a name="LiquidCache"></a>

## *LiquidCache*
**Kind**: global abstract class  
**Author**: FlaringPhoenix  

* *[LiquidCache](#LiquidCache)*
    * *[new LiquidCache(defaultExpiration)](#new_LiquidCache_new)*
    * *[.set(key, value, expiration)](#LiquidCache+set) ⇒*
    * *[.delete(key)](#LiquidCache+delete) ⇒*
    * *[.clear()](#LiquidCache+clear)*

<a name="new_LiquidCache_new"></a>

### *new LiquidCache(defaultExpiration)*

| Param | Default | Description |
| --- | --- | --- |
| defaultExpiration | <code>60000</code> | <p>Default expiration time in milliseconds (Default: 60000)</p> |

<a name="LiquidCache+set"></a>

### *liquidCache.set(key, value, expiration) ⇒*
<p>Sets a key-value pair in the cache</p>

**Kind**: instance method of [<code>LiquidCache</code>](#LiquidCache)  
**Returns**: <p>The cache instance</p>  

| Param | Description |
| --- | --- |
| key | <p>Key to set</p> |
| value | <p>Value to be stored within key</p> |
| expiration | <p>(Optional) Expiration time in milliseconds (Default: 60000)</p> |

<a name="LiquidCache+delete"></a>

### *liquidCache.delete(key) ⇒*
<p>Pop's an element from the cache</p>

**Kind**: instance method of [<code>LiquidCache</code>](#LiquidCache)  
**Returns**: <p>The value stored within the key</p>  

| Param | Description |
| --- | --- |
| key | <p>Key to get</p> |

<a name="LiquidCache+clear"></a>

### *liquidCache.clear()*
<p>Clears the entire cache and all timeouts</p>

**Kind**: instance method of [<code>LiquidCache</code>](#LiquidCache)  
