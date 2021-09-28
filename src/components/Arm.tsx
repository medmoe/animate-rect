import {FC} from "react";
interface IProps {
    degree: number;
    height: number;
}

const Arm: FC<IProps> = ({degree, height}) => {
    return (
        <div className="rect" style={{transform: `rotate(${degree}deg)`, height: height}}>

        </div>
    )
}

export default Arm;