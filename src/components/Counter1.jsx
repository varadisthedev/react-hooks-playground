import React,{useReducer} from 'react'
const initialState=0;
const reducer=(state,action)=>{ //curr state, action

    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter1() {
    const [count,dispatch] = useReducer(reducer,initialState)
    // function, instate
  return (
    <div className="flex flex-col items-center gap-4 p-6">

        <div>count: {count}</div>
        
        <div>
            <button onClick={()=>{dispatch('increment')}} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">
                increment
            </button>
            <button onClick={()=>{dispatch('decrement')}} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">
                decremenet
            </button>
            <button onClick={()=>{dispatch('reset')}} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">
                reset
            </button>
        </div>
    </div>
  )
}

export default Counter1