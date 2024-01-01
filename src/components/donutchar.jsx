
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const DonutChart = ({consumePersent, color1, color2})=>{

    const [deg, setDeg] = useState(0);

    useEffect(()=>{
        setDeg(Math.round(consumePersent * 360 / 100));
    }, [consumePersent])

    return (
        <>
        <div className='max-w-[100px] rounded-full p-3 aspect-square flex justify-center items-center transition-transform hover:rotate-[360deg] hover:cursor-default duration-150'
        style={{backgroundImage:`conic-gradient(${color1} 0deg, ${color1} ${deg}deg, ${color2} ${deg}deg, ${color2} 360deg)`}}
        
        >
            <div className='dark:bg-gray-600 bg-gray-200 rounded-full p-2 aspect-square w-full flex justify-center items-center'>
                {consumePersent}%
            </div>
        </div>
        </>
    )
}
DonutChart.propTypes = {
    consumePersent: PropTypes.number,
    color1: PropTypes.string,
    color2: PropTypes.string
}

export default DonutChart