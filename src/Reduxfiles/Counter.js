import React from 'react'
import {increament, decreament,inc, dec} from '../Store/Store/features/Counterslice'
import { useDispatch, useSelector } from 'react-redux'


function Counter() {
  
  let dispatch=useDispatch()
let count=useSelector((state)=>state.counter.value)
let count2=useSelector(state=>state.counter.value2)
// let count=useSelector((state)=>state.counter.value)
    
  return (
   <>
<button onClick={()=>{dispatch(increament())}}>+</button>   
<p>{count}</p>
<button onClick={()=>{dispatch(decreament())}}>-</button>

<br />
<br />
{/* Second counter */}
<button onClick={()=>{dispatch(inc())}}>+</button>
<p>{count2}</p>
<button onClick={()=>{dispatch(dec())}}>_</button>
   
   
   
   </>
  )
}

export default Counter