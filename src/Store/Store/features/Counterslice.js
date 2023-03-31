import { createSlice } from "@reduxjs/toolkit";

let CounterSlice=createSlice({
    name:'counter',
    initialState:{value:0,value2:0},
    reducers:{
        increament(state,action){state.value+=1},
        decreament(state,action){state.value-=1},
        inc(state,action){state.value2+=15},
        dec(state,action){state.value2-=15}
       
    }

})
// {
//     name:'counter2',
//     initialState:{value:0},
//     reducers:{
//         inc(state,action){state.value+=15},
//         dec(state,action){state.value-=15}
//     }
// })
export default CounterSlice.reducer;
export const{increament,decreament,inc ,dec}=CounterSlice.actions;

