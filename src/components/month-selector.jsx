import React, { useEffect, useState } from 'react';
import backImg from '../images/arrow-back-white.png';
import nextImg from '../images/arrow-next-white.png';



const monthColors = [
    "#BDFFF0",
    "#B8FFE0",
    "#70CF93",
    "#70CF93",
    "#C9E892",
    "#C3CC95",
    "#F59342#F59342",
    "#FF9470",
    "#FFA970",
    "#EEFFCC",
    "#A9DEE8",
    "#BDF4FF"
]

export default function MonthSelector({ month, handlePrev, handleNext}){
    // const currentMonth = new Date().getMonth();
    // const [month, setMonth] = useState(months[currentMonth]);
    // const [monthColor, setMonthColor] = useState(monthColors[currentMonth]);
    // const [monthIndex, setMonthIndex] = useState(currentMonth);

    // useEffect(() => {        
    //     setMonth(months[monthIndex]);
    //     setMonthColor(monthColors[monthIndex]);
    // }, [monthIndex]);


    // const handleBack = () => {
    //     setMonthIndex(monthIndex == 0 ? 11 : monthIndex -1);
    // }

    // const handleNext = () => {
    //     setMonthIndex(monthIndex == 11 ? 0 : monthIndex + 1);
    // }

    //style={{color: monthColor}}
    // {monthIndex != currentMonth &&
    //     <div className="go-back-month">reset</div>}
    return (
        <div className="month-selector">
            <img className="btn-navigate" src={backImg} alt="<" onClick={handlePrev}/>
            <div className="month-container">
                <div className="month" >{month}</div>

            </div>
            <img className="btn-navigate" src={nextImg} alt=">" onClick={handleNext}/>
        </div>
    )
}