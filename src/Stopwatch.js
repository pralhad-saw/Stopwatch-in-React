import React, {useState, useCallback , useRef } from 'react';

function Stopwatch() {
const [time, setTime] = useState(0);
const [isRunning, setIsRunning] = useState(false);
const intervalRef = useRef(null);
const start = useCallback(() => {
if (!isRunning) {
intervalRef.current = setInterval(() => {

setTime((prevTime) => prevTime + 1);

}, 1000);

setIsRunning (true);

} }, [isRunning]);

const stop = useCallback(() => {

if (isRunning) {

clearInterval(intervalRef.current);

setIsRunning (false);

}

}, [isRunning]);

const reset = useCallback(() => {

clearInterval(intervalRef.current);

setisRunning (false);

setTime(0);

}, []);

return (

<div>

<h1>Stopwatch</h1>

<p>Time: {time} seconds</p>

<button onClick={start}>Start</button>

<button onClick={stop}>Stop</button>

<button onClick={reset)>Reset</button>

</div>


  );
}
export default Stopwatch;
