# LiquidCache
![](https://img.shields.io/github/stars/BlueFox-Development/LiquidCache) ![](https://img.shields.io/github/forks/BlueFox-Development/LiquidCache) ![](https://img.shields.io/github/issues/BlueFox-Development/LiquidCache) ![](https://img.shields.io/github/license/BlueFox-Development/LiquidCache) ![](https://img.shields.io/discord/870418236078960791)

# About
LiquidCache is an easy to setup map based caching system. You can also configure how often the cache is reset.

# Installation

Run the following command to install the npm package

```bash
npm i liquidcache
```

## Usage

### Basic Usage:
```javascript
const Cache = require('liquidcache');

Cache.set('name', 'FlaringPhoenix');
Cache.delete('name');
```

### Advanced Usage:
#### Deletes from cache after 5000ms
```javascript
const Cache = require('liquidcache');

Cache.settings({
    debug: true,
    deletionInterval: 0,
});

Cache.set('name', 'FlaringPhoenix', 5000);
```

### Methods:
```javascript
// Sets in cache
Cache.get('name', 'FlaringPhoenix');

// Removes from cache
Cache.delete('name');

// Gets everything in cache
Cache.getAll();

// Gets cache size
Cache.size();

// Clears cache
Cache.removeAll();

// Updates cache settings
Cache.settings({
    debug: true,
    deletionInterval: 0,
}]);

// Gets cache settings
Cache.getSettings();
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
