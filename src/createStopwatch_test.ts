import { assert } from "assert";

import { createStopwatch } from "@/src/createStopwatch.ts";

Deno.test("can measure elapsed time", () => {
  const stopwatch = createStopwatch();

  stopwatch.start();

  const timeoutId = setTimeout(() => {
    stopwatch.stop();
    const elapsed = stopwatch.getElapsedTime();
    assert(elapsed >= 100);
  }, 150);

  stopwatch.reset();

  assert(stopwatch.getElapsedTime() === 0);
  clearTimeout(timeoutId);
});
