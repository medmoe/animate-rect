import React, {ChangeEvent, useEffect, useState} from 'react';
import Rect from "./components/Rect";
import './App.css';
import Slider from "./components/Slider";


function App() {
    const [degree, setDegree] = useState(0);
    const [isRotating, setIsRotatings] = useState(false);
    const [speed, setSpeed] = useState<string>("");
    useEffect(() =>{
        if (isRotating) {
            const interval = setInterval(rotate, parseInt(speed));
            return () => clearInterval(interval);
        }
    },[degree, isRotating])
    const rotateRect = () => {
        setDegree(degree + 10);
    }
    const rotate = () => {
        setIsRotatings(true);
        setDegree(degree + 10);
    }
    const stop = () => {
        setIsRotatings(false);
    }
    const updateSpeed = (event: ChangeEvent<HTMLInputElement>) => {
        setSpeed(event.target.value);
    }
    return (
        <div>
            <Rect degree={degree} />
            <div className="my-btn">
                <button onClick={rotateRect}>Rotate</button>
                <button onClick={rotate}>Rotate infinitely</button>
                <button onClick={stop}>Stop</button>
                <Slider updateSpeed={updateSpeed}/>
            </div>
        </div>
    )
}

export default App;
