import React,{useState} from 'react'

function HookCounter2() {
    const initialCount=0;
    const [count, setCount]=useState(initialCount);
    const increment5=()=>{
        for (let i=0; i<5;i++){
            // setCount(count +1);
            setCount(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
        Count:{count}
        
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <button onClick={()=>{setCount(initialCount)}}>reset</button>
        <button onClick={()=>{setCount(count-1)}}>decrement</button>
        <button onClick={increment5}>increment 5</button>
    </div>
  )
}

export default HookCounter2