import { useState } from "react";
import './App.css';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg">
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={()=> setCount(count + 10)}>Increase by 10</button>
      <button onClick={() => setCount(count - 10)}>Decrease by 10  </button>
      <button onDoubleClick={()=> setCount(count+count)}>Double</button>
    </div>
  );
}

export default CounterApp;