import React, { useReducer } from "react";

// Rules Of Hooks
// Only Call Hooks at the Top Level
// we nee

// reducer life cycle 
// action
// action creator are functions which returns an plain javascript Object
// { type:'ADD_TO_CART', payload:{} }
// dispatch 
// reducer --> is one which will be update the state based on action




function ReducerHook() {
  // reducer is one which will be update the state based on action
  const reducer = (currentState, action) => {
    console.log(action)
      switch(action.type){
        case 'INCREMENT':
          return currentState+action.payload;
        case "DECREMENT":
          return currentState-action.payload;
          default:
            return currentState;
      }
  };
  const [count, dispatch] = useReducer(reducer, 0);


  const incrementCount = ()=>{
    return {
      type : "INCREMENT",
      payload:5
    }
  }

  const decrementCount = ()=>{
    return {
      type : "DECREMENT",
      payload:5
    }
  }

  return (
    <div>
      ReducerHook
      <section>
        <p> Count {count}</p>
        <button className="btn btn-info" onClick={()=>{dispatch(incrementCount())}}>Increment</button>
        <button className="btn btn-info"onClick={()=>{dispatch(decrementCount())}}>Decrement</button>
      </section>
    </div>
  );
}

export default ReducerHook;
