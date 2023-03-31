import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetcheddata } from '../Store/Store/features/Thunkslice'
import { useEffect } from 'react'




function Thunk() {
    let dispatch=useDispatch()
let istate=useSelector(state=>state.thunk)

useEffect(()=>{
dispatch(fetcheddata())
},[dispatch])


  return (
    <>
   { istate.products&& istate.products.map(item=>{
    return(
        <>
        <div>
            <img src={item.image} alt="" />
        </div>
        
        
        
        </>
    )
   })}
    </>
  )
}

export default Thunk