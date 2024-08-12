import { configureStore } from '@reduxjs/toolkit';
import countReducer from "../Redux/CountSlice"
import timerReducer from "../Redux/TimerSlice"
const Store=configureStore({
    reducer:{
        count:countReducer,
        timer:timerReducer,
    }
  
})
export default Store;