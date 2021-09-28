import {FC} from 'react';
import './Rect.css';
interface IProps {
    degree: number;
}
const Rect: FC<IProps> = ({degree}) => {
    return(
        <div className="rect-wrapper">
            <div className="rect" style={{transform: `rotate(${degree}deg)`}}>

            </div>
        </div>
    )
}

export default Rect;