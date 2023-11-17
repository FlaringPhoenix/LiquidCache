[![CodeQL](https://github.com/FlaringPhoenix/LiquidCache/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/FlaringPhoenix/LiquidCache/actions/workflows/codeql-analysis.yml)
[![Code Style: Google](https://img.shields.io/badge/code%20style-google-blueviolet.svg)](https://github.com/google/gts)
![npm](https://img.shields.io/npm/v/liquidcache)
![license](https://img.shields.io/github/license/FlaringPhoenix/LiquidCache)

# LiquidCache

LiquidCache is an easy-to-setup, map-based caching system for Node.js, written in TypeScript. It allows you to store key-value pairs in memory and configure cache expiration intervals for optimized data retrieval.

## Features

- In-memory storage of key-value pairs for fast access.
- Configurable cache expiration intervals to ensure data freshness.
- Type-safe operations due to TypeScript integration.
- Straightforward API for managing cache data.

## Installation

Install LiquidCache using npm:

```bash
npm install liquidcache
```

## Usage

Make sure to compile the TypeScript to JavaScript before using LiquidCache:

```bash
npm run build
```

Here's how you can use LiquidCache in your TypeScript code:

```ts
import { LiquidCache } from 'liquidcache';

// Create a new cache instance
const cache = new LiquidCache<string>();

// Set a value in the cache
cache.set('name', 'FlaringPhoenix');

// Retrieve a value from the cache
const value = cache.get('name'); // 'FlaringPhoenix'

// Remove a value from the cache
cache.delete('name');

// Set a value in the cache with an expiration time (in milliseconds)
cache.set('name', 'FlaringPhoenix', 5000);

// After 5 seconds, 'name' will be automatically removed from the cache
```

## Support

If you need help with configuring or using LiquidCache, please open an issue [here](https://github.com/FlaringPhoenix/LiquidCache/issues/new).

## Contributing

Contributions are welcome! For significant changes, please open an issue first to discuss what you would like to change. Don't forget to update tests as necessary.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/FlaringPhoenix/LiquidCache/blob/master/LICENSE) file for details.
