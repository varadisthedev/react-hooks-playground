import React,{useState} from 'react'

function HookCounter() {
    const [count,setCount]=useState(0)
    // current val and setter method = useState(initial value)
    //accept initial , returns current value + a method to update the state
  return (
    <div>
        <button onClick={()=>{setCount(count+1)}}>Count is {count}</button>
    </div>
  )
}

export default HookCounter
//# rules of hooks
//always call hooks on top 
//dont call hoop inside loops , conditional and nested
//do not use hooks in vanilla react functions. they are only for react functional components 