import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetcheddata=createAsyncThunk('fetchasyncdata',async()=>{
    let data=await axios.get('https://fakestoreapi.com/products')
    console.log(data)
    return data.data
})

let thunkslice=createSlice({
 
    name:'thunk',
    initialState:{products:[]},
    reducers:{

        setdata:(state,action)=>{ 
            console.log()
           
        }
    },
    extraReducers:{
    [fetcheddata.fulfilled]:(state,action)=>{
        state.products=action.payload;
        console.log(action.payload)

    }
    }








})
export default thunkslice.reducer;
export const{setdata} =thunkslice.actions;