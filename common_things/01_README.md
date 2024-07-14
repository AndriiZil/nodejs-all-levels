### Semantic Versioning (SemVer)

- Semantic Versioning (SemVer) is a versioning scheme for software that aims to convey meaning about the underlying
  changes with each new release. SemVer uses a three-part version number: `MAJOR.MINOR.PATCH`, each of which signifies
  a different level of changes:

- MAJOR version: Increments when you make incompatible API changes. Breaking changes.
- MINOR version: Increments when you add functionality in a backward-compatible manner. New features, no breaking changes.
- PATCH version: Increments when you make backward-compatible bug fixes. Bug fixes, no breaking changes.

1. MAJOR Version (X.y.z):

- Incremented for incompatible API changes.
- Changes that require users to modify their code to continue using the software.

2. MINOR Version (x.Y.z):

- Incremented for new functionality that is backward-compatible.
- New features that do not break existing functionality.

3. PATCH Version (x.y.Z):

- Incremented for backward-compatible bug fixes.
- Fixes to issues that do not affect the API or add new features.

#### Examples

- `1.0.0`: Initial release with stable API.
- `1.1.0`: Added new feature in a backward-compatible way.
- `1.1.1`: Fixed a bug in a backward-compatible way.
- `2.0.0`: Introduced changes that are not backward-compatible.

#### Pre-release Versions

Pre-release versions can be denoted by appending a hyphen and a series of identifiers separated by dots:

- `1.0.0-alpha`
- `1.0.0-beta`
- `1.0.0-rc.1`
