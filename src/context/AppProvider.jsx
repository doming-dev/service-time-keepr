import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';


function getDetailsFromLocalStorage(){
    const details = localStorage.getItem("keepr-details")
    if(!!!details){
        return [];
    }
    else{
        return JSON.parse(details);
    }
}

function  setDetailsToLocalStorage(details){
    localStorage.setItem("keepr-details", JSON.stringify(details));
}


export default function AppProvider({ children }){
    const [details, setDetails] = useState([]);
    const [month, setMonth] = useState();
    const [monthRecords, setMonthRecords ] = useState([]);

    useEffect(() => {
        setDetails(getDetailsFromLocalStorage());
    }, []);

    useEffect(() => {
        setDetailsToLocalStorage(details);
    }, [details]);

    useEffect(() => {
        details.filter(c => c !== month);
    }, [month])

    function addRecord(date, time){
        setDetails([...details, { date: date, time: time}])
    }

    const context = {
        records: monthRecords,
        addRecord: addRecord,
        setMonth: setMonth,
    }
    return(
        <AppContext.Provider value={context} >{children}</AppContext.Provider>
    )
}