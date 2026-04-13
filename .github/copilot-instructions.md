# Copilot Instructions

## Build & Test Commands

```bash
# Run all tests
npm test

# Run a single test file
npx jest src/tests/calculator.test.js

# Run a single test by name pattern
npx jest --testNamePattern="add"

# Run the CLI directly
node src/calculator.js <operand1> <operator> <operand2>
node src/calculator.js sqrt <operand>
```

## Architecture

All calculator logic lives in a single file: `src/calculator.js`. It serves a dual purpose:
- **Library**: exports named functions (`add`, `subtract`, `multiply`, `divide`, `modulo`, `power`, `squareRoot`) for use in tests and other modules
- **CLI entrypoint**: when run directly (`require.main === module`), parses `process.argv` and dispatches to the appropriate function

Tests live in `src/tests/calculator.test.js` and import directly from `../calculator` (relative to the tests directory).

## Key Conventions

### Error handling returns strings, not exceptions
All guard conditions (division by zero, modulo by zero, negative square root) return an `'Error: ...'` string rather than throwing. Tests assert on these exact string values with `.toBe(...)`.

### `squareRoot` uses a different CLI syntax
All binary operations follow `<operand1> <operator> <operand2>`. Square root is the only unary operation and uses `sqrt <operand>` instead. The CLI handles this as a special case before the standard 3-arg path.

### Feature requests go through the issue template
New calculator operations must be requested via `.github/ISSUE_TEMPLATE/feature_request.md` before implementation.

### `package-lock.json` is gitignored
Do not attempt to commit `package-lock.json` — it is excluded in `.gitignore`.

### Module system
The project uses CommonJS (`"type": "commonjs"` in `package.json`). Use `require`/`module.exports`, not ES module `import`/`export`.
