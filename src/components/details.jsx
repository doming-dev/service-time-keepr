import React from 'react';
import Stopwatch from './stopwatch';

export default function Details({ handleDelete, handleAdd, data}){

    return (
        <div>
            <Stopwatch handleSave={handleAdd} />
            <Records records={data} handleDelete={handleDelete}/>
        </div>
    )
}

function Records({ records, handleDelete }){
    return (
        <div>
            {records.map((x, i) => <Record key={i} data={x} handleDelete={handleDelete}/>)}
        </div>
    )
}

function Record({data, handleDelete}) {
    const dayIndex = new Date(data.date).getDay()
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var date = new Date(data.date);
    const formattedDate = ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + date.getFullYear()
    const hours = ("0" + data.hours).slice(-2);
    const minutes = ("0" + data.minutes).slice(-2);
    const seconds = ("0" + data.seconds).slice(-2);
    const mili = ("0" + data.mili).slice(-2);
    return (
        <div className="record">
            <div className="record-date-container">
                <div className="record-day">{weekday[dayIndex]}</div>
                <div className="record-date">{formattedDate} </div>
            </div>
            <div className="record-time-container">
                <div className="record-time">{hours}:{minutes}:{seconds}</div>
                <div className="record-mili">.{mili}</div>
            </div>
            <div className="btn btn-delete" onClick={handleDelete}>Delete</div>
        </div>
    )
}