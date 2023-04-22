import { useState, useRef, useEffect } from "react";
import workerScript from "./worker";

const initialState = { num: 0, result: null, loadingMessage: "" };

const WebWorker = () => {
  const [state, setState] = useState(initialState);
  const worker = useRef(null);

  const { num, loadingMessage, result } = state;

  const onCountChangeHandler = (e) => {
    const num = e.target.value;
    setState({ num });
  };

  const onCalculateHandler = () => {
    worker.current.postMessage(num);
  };

  useEffect(() => {
    const onWorkerHandler = (e) => {
      const type = e.data.type;
      if (type === "loading") {
        const { i, num } = e.data;
        setState((prevState) => ({
          ...prevState,
          num,
          loadingMessage: `Loading ${i} / ${num}`,
        }));
      } else {
        const { result } = e.data;

        setState((prevState) => ({
          ...prevState,
          result,
          loadingMessage: `Finished Loading => result: (${result})`,
        }));
      }
    };

    worker.current = new Worker(workerScript);
    worker.current.addEventListener("message", onWorkerHandler);

    return () => {
      worker.current.removeEventListener("message", onWorkerHandler);
    };
  }, []);

  return (
    <div>
      <input type="number" value={num} onChange={onCountChangeHandler} />
      <button onClick={onCalculateHandler}>Calculate</button>
      {!!loadingMessage && <h1>{loadingMessage}</h1>}
      {result && <h2>{result}</h2>}
    </div>
  );
};

export default WebWorker;
