
import './App.css'
import { useRef, useState } from "react";




function App() {
  let [count, setCount] = useState(0);
  let countRef = useRef(0)

  // useref 
  let handleClick2=()=>{
    console.log(countRef.current++)
  }
  // useref 

  // useState
  let handleClick=()=>{
    count++
    setCount(count)
  }
  // useState

  return (
    <> 
    {/* For useState  */}
    <h1>For useState</h1>
    <h2>{count}</h2>
    <button onClick={handleClick}>Click</button> 
    {/* For useState  */}

    {/* For Use Ref  */}
    <h1>For useRef</h1>
    <h2>{countRef.current}</h2>
    <button onClick={handleClick2}>Click</button> 
    {/* For Use Ref  */}
   
    </>
  )
}


export default App





