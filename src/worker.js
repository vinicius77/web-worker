/**
 * @description receives the data of "worker.current.postMessage(num)" call on
 * as "e.data" on WebWorker.jsx component
 * @returns {void}
 */
const loopworker = () => {
  // equivalent to self.onmessage
  onmessage = (e) => {
    const num = e.data;
    let result = 0;

    for (let i = 1; i <= num; i++) {
      const data = { type: "loading", i, num };

      /** Post message at every iteration */
      postMessage(JSON.parse(JSON.stringify(data)));

      /** Some non-sense calculation to illustrate the page does not get blocked */
      for (let j = 0; j < i; j++) {
        result++;
      }
    }

    const data = {
      type: "result",
      result,
    };

    /** Post message when finishing calculating */
    postMessage(JSON.parse(JSON.stringify(data)));
  };
};

let code = loopworker.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
const blob = new Blob([code], { type: "application/javascript" });
const workerScript = URL.createObjectURL(blob);

console.group(
  "%cWeb Worker Blob",
  "background-color: #e0005a ; color: #ffffff ; font-weight: bold ; padding: 4px ;"
);
console.log(
  `%cYou can see the web worker source at ${workerScript}`,
  "display: inline-block ; border: 3px solid red ; border-radius: 7px ; " +
    "padding: 10px ; margin: 20px ;"
);
console.groupEnd();

export default workerScript;
