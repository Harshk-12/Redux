import { createSlice } from "@reduxjs/toolkit";
let todoslice=createSlice({

name:'todo',
initialState:{
    inputvalue:'',
    addedvalues:[],
    editvalue:false,
    deletevalue:[],


    },
    reducers:{
    //    setinputvalue:(state,action)=>{ (state.editvalue===true)?state.addedvalues[]   state.inputvalue=action.payload},
        setaddedvalue:(state,action)=>{state.addedvalues=[...state.addedvalues,action.payload]
        console.log(state.addedvalues ) 
     },
     setedit:(state,action)=>{
        state.editvalue=true;
        state.addedvalues[action.payload]=state.inputvalue }

        // edittask(state){},
        // deletetask(state){}
    }
})





export default todoslice.reducer;
export const{setaddedvalue, setinputvalue,setedit}=todoslice.actions;
