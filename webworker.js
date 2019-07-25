const i = 21;

function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
}

const start = performance.now();

fibonacci(i);

const end = performance.now();

postMessage("Fibonacci worker took " + (end - start) + " milliseconds.");