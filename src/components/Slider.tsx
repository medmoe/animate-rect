import React, {FC} from "react";

interface IProps {
    updateSpeed: any;
}

const Slider: FC<IProps> = ({updateSpeed}) => {
    return (
        <div className="slidecontainer">
            <input type="range"
                   min="10"
                   max="1000"
                   className="slider"
                   id="myRange"
                   onChange={updateSpeed}/>
        </div>

    )
};

export default Slider;