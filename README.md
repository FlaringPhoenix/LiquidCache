[![CodeQL](https://github.com/FlaringPhoenix/LiquidCache/actions/workflows/codeql.yml/badge.svg)](https://github.com/FlaringPhoenix/LiquidCache/actions/workflows/codeql.yml)
![npm](https://img.shields.io/npm/v/liquidcache)
![license](https://img.shields.io/github/license/BlueFox-Development/LiquidCache)

# LiquidCache

LiquidCache is an easy-to-setup map-based caching system for Node.js. It allows you to store key-value pairs in memory and configure cache expiration intervals.

## Features

- In-memory storage of key-value pairs.
- Configurable cache expiration intervals.
- Easy-to-use API for setting, getting, and deleting cache entries.

## Installation

Install LiquidCache using npm:

```bash
npm install liquidcache
```

## Usage

### Simple Usage:
```js
const Cache = require('liquidcache');

Cache.set('name', 'FlaringPhoenix');
Cache.delete('name');
```

### Advanced Usage:
Set a Cache Entry with an Expiration Time
```js
const Cache = require('liquidcache');

Cache.setInterval(5000);
Cache.set('name', 'FlaringPhoenix', 5000);
```

## Methods
```js
// Set a value in the cache
Cache.set('name', 'FlaringPhoenix');

// Remove a value from the cache
Cache.delete('name');

// Get all entries in the cache
Cache.getAll();

// Clear the entire cache
Cache.removeAll();

// Update cache settings
Cache.setInterval();
```

## Support
Need help configuring LiquidCache or encountering an issue? Please open an issue [here](https://github.com/FlaringPhoenix/LiquidCache/issues/new).

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update the tests as appropriate.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/FlaringPhoenix/LiquidCache/blob/master/LICENSE) file for details.