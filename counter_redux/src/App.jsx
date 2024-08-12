import {React,  useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './Redux/CountSlice';  // Correct import
import {TimerStart,TimerStop } from "./Redux/TimerSlice"

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count.value);
  const timer=useSelector((state)=>(state.timer.time))
  const isTimerRunning = useSelector((state) => state.timer.isTimerRunning);
  console.log(isTimerRunning)
  useEffect(() => {
    const interval = setInterval(() => {
      if (isTimerRunning) {
        if (timer >= 0) {
          dispatch(TimerStart());
        } else {
          dispatch(TimerStop());
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, timer, isTimerRunning]);

  const handleIncrement = () => {
    if (isTimerRunning) {
      dispatch(increment());
    }else{
      dispatch()
    }
  };


  return (
    <div className="maincontainer flex items-center justify-center bg-black h-[100vh]">
      <div className="box bg-white h-[80%] p-[20px] text-2xl font-black">
        <h1 className='items-center p-10 text-lg mx-12'>No of clicks until the timer expires</h1>
        <div className="innerbox bg-orange-500 h-[65%] w-[60%] m-auto flex items-center justify-center flex-col">
          <div className="h1 p-10">
            {count}
          </div>
          <div className="">Time left : {timer} seconds</div>
          <div className="card pt-5">
            <button className='bg-white px-4 m-4 py-2' onClick={handleIncrement}>  {/* Correct action */}
              + 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
