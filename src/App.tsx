import React, {ChangeEvent, useEffect, useState} from 'react';
import Rect from "./components/Rect";
import './App.css';
import Slider from "./components/Slider";


function App() {
    const [degree, setDegree] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutesArm, setMinutesArm] = useState(0);
    const [hoursArm, setHoursArm] = useState(0);
    const [isRotating, setIsRotatings] = useState(false);
    const [speed, setSpeed] = useState<string>("");
    useEffect(() =>{
        if (isRotating) {
            const interval = setInterval(rotate, parseInt(speed));
            return () => clearInterval(interval);
        }
    },[degree, isRotating])
    const rotateRect = () => {
        setDegree(degree + 6);
    }
    const rotate = () => {
        setIsRotatings(true);
        setDegree(degree + 6);
        if (seconds < 60) {
            setSeconds(seconds + 1);
        }else{
            setSeconds(0);
            setMinutesArm(minutesArm + 6)
            if (minutes < 60) {
                setMinutes(minutes + 1);
            }else{
                setMinutes(0);
                setHoursArm(hoursArm + 30);
                if (hours < 12) {
                    setHours(hours + 1);
                }else{
                    setHours(0);
                }
            }
        }
    }
    const stop = () => {
        setIsRotatings(false);
    }
    const updateSpeed = (event: ChangeEvent<HTMLInputElement>) => {
        setSpeed(event.target.value);
    }
    return (
        <div>
            <Rect degrees={{'seconds': degree, 'minutes': minutesArm, 'hours': hoursArm}} />
            <div className="my-btn">
                <button onClick={rotateRect}>Rotate</button>
                <button onClick={rotate}>Rotate infinitely</button>
                <button onClick={stop}>Stop</button>
                <Slider updateSpeed={updateSpeed} speed={speed}/>
            </div>
        </div>
    )
}

export default App;
