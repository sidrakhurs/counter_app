import { createSlice } from "@reduxjs/toolkit";
const initialState={
    time:10,
    isTimerRunning:true,
}
const TimerSlice=createSlice({
name:"timer",
initialState:initialState,
reducers:{
    TimerStart:(state)=>{
if(state.time>0){
    state.time-=1;
}
    },
    TimerStop:(state)=>{
state.isTimerRunning=false;
    }
}
})

export const {TimerStart,TimerStop}=TimerSlice.actions
export default TimerSlice.reducer;

