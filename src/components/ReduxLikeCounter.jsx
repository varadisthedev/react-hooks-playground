import React, { useReducer } from "react";

// Initial state
const initialState = {
  count: 0,
  step: 1,
};

// Reducer (like Redux)
function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + state.step };
    case "decrement":
      return { ...state, count: state.count - state.step };
    case "reset":
      return initialState;
    case "setStep":
      return { ...state, step: action.payload }; // payload example
    default:
      return state;
  }
}

export default function ReduxLikeCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <p className="text-lg">Count: {state.count}</p>
      <p className="text-md text-gray-600">Step: {state.step}</p>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>

      <div className="flex gap-2 items-center">
        <label className="font-medium">Set Step:</label>
        <input
          type="number"
          className="px-2 py-1 border rounded"
          value={state.step}
          onChange={(e) =>
            dispatch({ type: "setStep", payload: Number(e.target.value) })
          }
        />
      </div>
    </div>
  );
}
