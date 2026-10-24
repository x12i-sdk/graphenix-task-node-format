# @x12i/graphenix-task-node-format usage example

Task node authoring contract: substance, bindings, pipeline, conditions, knowledge, and metadata validation.

This consuming application demonstrates **validate a task node from a reference authoring graph** using the published npm package, pinned to `2.17.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Validate a task node's bindings and pipeline fields.
- Share the task-node authoring contract between an editor and compiler.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/graphenix-task-node-format)
- [Implementation monorepo](https://github.com/x12i/graphenix-format)
- [Reviewed package source](https://github.com/x12i/graphenix-format/tree/28599719bd064429c220df35e297d299f81bbb40/packages/task-node-format)

The current source snapshot has a different manifest version from the pinned npm dependency. This example is validated against the installed npm release.

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
