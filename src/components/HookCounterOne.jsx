import React,{useState,useEffect} from 'react'

function HookCounterOne() {
    const [count,setCount]=useState(0);
    const [name,setName]=useState('');
    
    // this functions get execute after every render
    useEffect(()=>{
        console.log("use effect- updating document title")
        document.title=`you clicked ${count} times`;
    },[count]) // so that useEffect only runs after a change in count

    

  return (
    <div>
        <input type='text' value={name} onChange={e=>setName(e.target.value)}/>
        

        <button onClick={()=>{
            setCount(count+1)
        }}>clicked {count} times </button>
    </div>
  )
}

export default HookCounterOne