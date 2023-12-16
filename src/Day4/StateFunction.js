import { useState } from "react"
export default function StateFunction()
{
    const[carName,setCarName]=useState("Thar");
    const changeCarName=()=>setCarName("BMW");
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+5);
    const decrCount=()=>setCount(count-5);
    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={changeCarName}>click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>increment</button>
            <button onClick={decrCount}>decrement</button>
        </div>
    )
}