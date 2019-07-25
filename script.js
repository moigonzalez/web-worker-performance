function fibonacci(n) {
    return n < 1 ? 0
         : n <= 2 ? 1
         : fibonacci(n - 1) + fibonacci(n - 2);
} 

const startWorker = () => {
    let w = undefined;
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("webworker.js");
        }
        w.onmessage = function(event) {
            document.getElementById("resultWorker").innerHTML = event.data;
        };
    } else {
        document.getElementById("resultWorker").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
};

const startClient = () => {
    const i = 21;
    const start = performance.now();

    fibonacci(i);

    const end = performance.now();

    document.getElementById("resultClient").innerHTML = "Fibonacci worker took " + (end - start) + " milliseconds.";
}

const startTest = () => {
    startWorker();
    startClient();
};