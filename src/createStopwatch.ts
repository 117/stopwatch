/**
 * Represents a stopwatch with start, stop, reset, and elapsed time functionality.
 * @property {function(): void} start - Starts the stopwatch.
 * @property {function(): void} stop - Stops the stopwatch.
 * @property {function(): void} reset - Resets the stopwatch.
 * @property {function(): number} getElapsedTime - Returns the elapsed time in milliseconds.
 */
export type Stopwatch = {
  start: () => Stopwatch;
  stop: () => Stopwatch;
  reset: () => Stopwatch;
  getElapsedTime: () => number;
};

/**
 * Creates a new stopwatch instance.
 * @returns {Stopwatch} The stopwatch instance.
 */
export const createStopwatch = (): Stopwatch => {
  let startTime: number | null = null;
  let elapsedTime: number = 0;
  let running: boolean = false;

  return {
    start() {
      if (!running) {
        startTime = Date.now() - elapsedTime;
        running = true;
      }

      return this;
    },
    stop() {
      if (running) {
        elapsedTime = Date.now() - startTime!;
        running = false;
      }

      return this;
    },
    reset() {
      elapsedTime = 0;

      if (running) {
        startTime = Date.now();
      }

      return this;
    },
    getElapsedTime() {
      if (running) {
        return Date.now() - startTime!;
      }

      return elapsedTime;
    },
  };
};
