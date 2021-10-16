import React, { useState, useEffect } from 'react';

export default function ControlButtons({ 
    active,
    isPaused,
    handleSave,
    handleStart,
    handlePauseResume,
    handleReset}){

        const StartButton = (
            <div className="btn btn-start" onClick={handleStart}>
                Start
            </div>
        )

        const ActiveButtons = (
            <div className="active-btn-container">
                <div className="btn btn-save" onClick={handleSave}>
                    Save
                </div>
                <div className="btn btn-pause-resume" onClick={handlePauseResume}>
                    {isPaused ? "Resume" : "Pause"}
                </div>      
                <div className="btn btn-reset" onClick={handleReset}>
                    Reset
                </div>
      
            </div>
        )
    return (
        <div className="control-buttons">
            <div>{active ? ActiveButtons : StartButton}</div>
        </div>
    )
}