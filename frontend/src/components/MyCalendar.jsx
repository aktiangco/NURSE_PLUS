import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const MyCalendar = () => {
    
    const [date, setDate] = useState(new Date());

    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    
    return (
        <div>
           
            <Calendar value={date} onChange={handleDateChange}></Calendar>
        </div>
    );
  };
  
  export default MyCalendar;