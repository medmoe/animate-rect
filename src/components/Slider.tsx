import React, {FC} from "react";

interface IProps {
    updateSpeed: any;
    speed: string;
}

const Slider: FC<IProps> = ({updateSpeed, speed}) => {
    return (
        <div className="slidecontainer">
            <input type="range"
                   min="10"
                   max="1000"
                   className="slider"
                   id="myRange"
                   onChange={updateSpeed}/>
            <div>{speed}</div>
        </div>

    )
};

export default Slider;