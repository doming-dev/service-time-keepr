import React, {useState, useEffect} from 'react';
import MonthSelector from './month-selector';
import Details from './details';

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

export default function TimeKeeper(){
    const currentMonth = new Date().getMonth();

    // memory data storage
    const [allData, setAllData] = useState([]);

    // month info
    const [selectedMonth, setSelectedMonth] = useState(months[currentMonth]);
    const [monthIndex, setMonthIndex] = useState(currentMonth);

    // detail info
    const [relevantDetails, setRelevantDetails] = useState([]);


    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        var data = localStorage.getItem("keepr");
        if(!!data)
            setAllData(JSON.parse(data));
        else
            setAllData([]);
    }

    useEffect(() => {        
        setSelectedMonth(months[monthIndex]);
        const relevantRecords = allData
            .filter(c => new Date(c.date).getMonth() === monthIndex);
        setRelevantDetails(relevantRecords);
    }, [monthIndex]);

    useEffect(() => {
        localStorage.setItem("keepr", JSON.stringify(allData))
        const relevantRecords = allData
            .filter(c => new Date(c.date).getMonth() === monthIndex);
        setRelevantDetails(relevantRecords);
    }, [allData])

    const handlePrev = () => {
        setMonthIndex(monthIndex == 0 ? 11 : monthIndex -1);
    }

    const handleNext = () => {
        setMonthIndex(monthIndex == 11 ? 0 : monthIndex + 1);
    }

    const handleDelete = (e) => {
        console.log("delete", e.target.id)
    }

    const handleAdd = (time) => {
        const totalMiliSeconds = Math.floor((time/10) % 100)
        const totalSeconds = Math.floor((time/1000) % 60)
        const totalMinutes = Math.floor((time/60000) % 60);
        const totalHours = Math.floor((time/600000) % 60);
        const recordToAdd=  { 
            date: new Date(), 
            hours: totalHours, 
            minutes: totalMinutes, 
            seconds: totalSeconds, 
            mili: totalMiliSeconds}
        setAllData([...allData, recordToAdd]);
    }


    return (
        <div>
            <MonthSelector 
                month={selectedMonth}
                handlePrev={handlePrev}
                handleNext={handleNext}/>
            <Details 
                data={relevantDetails} 
                handleDelete={handleDelete} 
                handleAdd={handleAdd}/>
        </div>
    )
}