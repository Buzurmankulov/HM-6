import "./App.css";
import React from "react";

function App() {
  let [count, setCount] = React.useState(0);

  const clicPlus = () => {
    setCount(count + 1);
  };

  const clicMinus = () => {
    setCount(count - 1);
  };
  const clicDelete = () => {
    setCount((count = 0));
  };
  return (
    <div className="App">
      <h2>Counter</h2>
      <h1>{count}</h1>
      <button className="minus" onClick={clicMinus} disabled={count === 0}>
        Decreaese-
      </button>
      <button className="plus" onClick={clicPlus}>
        Increase+
      </button>
      <button className="delete" onClick={clicDelete}>
        delete
      </button>
    </div>
  );
}

export default App;
