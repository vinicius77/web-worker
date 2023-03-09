import React, { Component } from "react";
import workerScript from "./worker";

class WebWorker extends Component {
  constructor() {
    super();
    this.state = {
      num: "",
      result: "",
      loadingMessage: "",
    };
    this.handleCount = this.handleCount.bind(this);
    this.handleCalculate = this.handleCalculate.bind(this);
  }

  componentDidMount() {
    this.worker = new Worker(workerScript);
    this.worker.addEventListener("message", (e) => {
      const type = e.data.type;
      if (type === "loading") {
        const { i, num } = e.data;
        this.setState({
          loadingMessage: `Loaded ${i} / ${num}`,
        });
      } else {
        const { result } = e.data;
        this.setState({
          result,
        });
      }
    });
  }
  handleCount(e) {
    this.setState({
      num: e.target.value,
    });
  }
  handleCalculate() {
    const { num } = this.state;
    this.worker.postMessage(num);
  }

  render() {
    const { num, loadingMessage, result } = this.state;

    return (
      <div>
        <input type="number" value={num} onChange={this.handleCount} />
        <button onClick={this.handleCalculate}>Calculate</button>
        <h1>{loadingMessage}</h1>
        <h2>{result}</h2>
      </div>
    );
  }
}

export default WebWorker;
