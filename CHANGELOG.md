# Changelog

All notable changes to the LiquidCache project will be documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2023-11-06

### Added
- TypeScript rewrite of the entire codebase for improved type safety and developer experience.
- Configurable expiration times for individual cache entries.
- Detailed `README.md` with updated instructions and examples.
- New unit tests for TypeScript implementation to ensure reliability and performance.

### Changed
- API overhauled to be more intuitive and to take advantage of TypeScript features.
- Update all dependencies to their latest versions for security and performance enhancements.
- Refactor internal caching mechanism for better performance and memory management.
- Migrate build and test scripts to work with the TypeScript codebase.

### Deprecated
- Some functions from the previous API version might be marked as deprecated if alternatives exist in the new API.

### Removed
- Removed all deprecated methods from the previous versions that are now obsolete due to new API changes.
- Elimination of any outdated dependencies that are no longer necessary.

### Fixed
- Addressed previously reported bugs that are relevant to the caching logic and data handling.

### Security
- Implemented security best practices as per the latest industry standards.

## 1.0.0
### Added
- Initial release of LiquidCache written in JavaScript.
- Basic in-memory caching functionality with simple key-value storage.
- Basic expiration mechanism for cache entries.

[2.0.0]: https://github.com/your-username/LiquidCache/releases/tag/v2.0.0
