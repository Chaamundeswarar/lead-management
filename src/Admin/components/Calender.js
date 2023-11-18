import {Calendar,dateFnsLocalizer} from "react-big-calendar";
import format from "date-fns/format";
import parse from "date-fns/startOfWeek";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import React,{useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const locales = {
    "en-US":require("date-fns/locale/en-US")
}

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events =[ {
    title:"Big Meeting",
    allDay:true,
    start:new Date(2023,6,5),
    end:new Date(2023,6,9)
},
{
    title:"Vacation",
    allDay:true,
    start:new Date(2023,7,5),
    end:new Date(2023,7,9)
},
{
    title:"Conference",
    allDay:true,
    start:new Date(2023,8,1),
    end:new Date(2023,8,4)
}]


function Calender() {

    const [newEvent,setNewEvent]=useState({title:"",start:"",end:""})
    const [allEvents,setAllEvents]=useState(events);

    function handleAddEvent() {
        setAllEvents([...allEvents,newEvent])
    }
  return (
    <div className="Calendar">
        <h3>Calender</h3><br/>
        <h2>Add New Event</h2>
        <div>
            <input type="text" placeholder="Add Title" style={{width:"20%",marginRight:"10px"}}
            value={newEvent.title} onChange= {(e) => setNewEvent({...newEvent, title:e.target.value})}
            />
            <DatePicker placeholderText="Start Date" style={{marginRight:"10px"}}
            selected = {newEvent.start} onChange={(start => setNewEvent({...newEvent,start}))}/>
            
            <DatePicker placeholderText="End Date" 
            selected = {newEvent.end} onChange={(end)=> setNewEvent({...newEvent,end})}/>
            <br/>
            <button style={{marginTop:"10px"}} onClick={handleAddEvent}>Add Event</button>
        </div>
        <Calendar localizer={localizer} events={allEvents}
        startAccessor="start" endAccessor="end" style={{height: 500, margin:"50px"}}/>
    </div>
  )
}

export default Calender