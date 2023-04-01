import {configureStore} from '@reduxjs/toolkit'
// import thunkslice from './features/Thunkslice'


// import CounterSlice from './features/Counterslice'
import todoslice from './features/todoslice'

export default configureStore({ 
    reducer:{
        // counter:CounterSlice
        todo:todoslice
        // thunk:thunkslice

    }
})