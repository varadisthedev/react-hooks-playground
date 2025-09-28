import React,{useState} from 'react'
import styles from './HookCounter2.module.css'

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
    <div className={styles.main_multi}>
        
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button onClick={()=>{setCount(initialCount)}}>reset</button>
        <h3 className={styles.h3}>Count:{count}</h3>
        <button onClick={()=>{setCount(count-1)}}>-</button>
        <button onClick={increment5}>+ 5</button>
    </div>
  )
}

export default HookCounter2