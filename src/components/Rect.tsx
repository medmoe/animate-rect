import {FC} from 'react';
import './Rect.css';
import Arm from '../components/Arm'

interface data {
    seconds: number;
    minutes: number;
    hours: number;
}
interface IProps {
    degrees: data;
}

const Rect: FC<IProps> = ({degrees}) => {
    return (
        <div className="container">
            <div className="rect-wrapper">
                <Arm degree={degrees.hours} height={70}/>
                <Arm degree={degrees.minutes} height={110}/>
                <Arm degree={degrees.seconds} height={130} />
            </div>
        </div>
    )
}

export default Rect;