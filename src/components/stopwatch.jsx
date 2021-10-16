import React, { useState, useEffect } from 'react';
import Timer from './timer';
import ControlButtons from './control-buttons';

export default function Stopwatch({ handleSave }){
    const [time, setTime] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);

    useEffect(() => {
        let interval = null;

        if(isActive && isPaused === false){
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }
        else{
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isActive, isPaused])

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    }

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    }

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    }

    const handleSaveTime = () => {
        handleSave(time);
        handleReset();
    }

    return(
        <div className="stop-watch">
            <Timer time={time} />
            <ControlButtons
                active={isActive}
                isPaused={isPaused}
                handleSave={handleSaveTime}
                handleStart={handleStart}
                handlePauseResume={handlePauseResume}
                handleReset={handleReset} 
            />
        </div>
    )
}