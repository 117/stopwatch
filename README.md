# stopwatch

![version](https://img.shields.io/jsr/v/%40117/stopwatch?style=flat-square&color=%23ff51bc&label=version)
![status](https://img.shields.io/github/actions/workflow/status/117/stopwatch/deploy.yml?style=flat-square)

An easy-to-use stopwatch for Deno.

## Contents

- [Features](#features)
- [Install](#install)
- [Example](#example)
- [Contributing](#contributing)

## Features

- [x] Simple and easy to use.
- [x] Measures elapsed time accurately.

## Install

For Deno:

```sh
$ deno add @117/stopwatch
```

## Example

```ts
import { createStopwatch } from "@117/stopwatch";

const stopwatch = createStopwatch();

stopwatch.start();
await new Promise((resolve) => setTimeout(resolve, 150));
stopwatch.stop();

console.log(stopwatch.getElapsedTime()); // 150
```

## Contributing

Feel free to contribute and PR to your 💖's content.
