import React, { useReducer } from "react";

// Rules Of Hooks
// Only Call Hooks at the Top Level
// we nee
function ReducerHook() {
  const reducer = (currentState, action) => {
      console.log(action)
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      ReducerHook
      <section>
        <p> Count {count}</p>
        <button className="btn btn-info" onClick={()=>{dispatch('INCREMENT')}}>Increment</button>
        <button className="btn btn-info"onClick={()=>{dispatch('DECREMENT')}}>Decrement</button>
      </section>
    </div>
  );
}

export default ReducerHook;
