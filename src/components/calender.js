import { XCircleFill, CalendarCheck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { addDate, removeDate } from "../reducers/dateListManager";
import React, { lazy } from "react";
import { addMapLocation } from "../reducers/locationListManager";
import pointData from "../data/sites.json"
import {store} from "../store";
import { CustomButton, CustomDatePicker } from "./customComponents";

export function DatesTable() { 
    //creates the location table

    const selectedDates = useSelector((state) => state.dateStore);
    return (
        //takes in list of locations and maps over them. FOr each location it creates a row wiith a delete button
        <div className="divide-y divide-solid divide-gray-300 overflow-auto relative h-80 bg-inherit">
        {selectedDates.initialDateArray.map(date => (
            CalenderTableRow(date.date)
        ))}
            
    </div>
    )
};

function CalenderTableRow(date)  {
    const dispatch = useDispatch()
    const dateString = stringToDate("20" + date)

    return (
              <div className="flex items-center justify-between items-center h-20 bg-inherit" key={dateString}>
                <div className="inline-block">
                    <h1 className="text-xl font-semibold text-inherit">{dateString}</h1>
                </div>

        <div className="">

         <button className = "relative dark:border-sky-600 text-sky-600" onClick={() => DateChanged(date, dispatch, "remove")}>
            <XCircleFill size={20}/>
         </button>
        </div>

          </div>
    )
}

const year3data = [
    "19-01-07",
    "19-01-14",
    "19-01-21",
    "19-01-28",
    "19-02-04",
    "19-02-11",
    "19-02-18",
    "19-02-25",
    "19-03-04",
    "19-03-11",
    "19-03-18",
    "19-03-25",
    "19-04-01",
    "19-04-08",
    "19-04-15",
    "19-04-22",
    "19-04-29",
    "19-05-06",
    "19-05-13",
    "19-05-20",
    "19-05-27",
    "19-06-03",
    "19-06-10",
    "19-06-17",
    "19-06-24",
    "19-07-01",
    "19-07-08",
    "19-07-15",
    "19-07-22",
    "19-07-29",
    "19-08-05",
    "19-08-12",
    "19-08-19",
    "19-08-26",
    "19-09-02",
    "19-09-09",
    "19-09-16",
    "19-09-23",
    "19-09-30",
    "19-10-07",
    "19-10-14",
    "19-10-21",
    "19-10-28",
    "19-11-04",
    "19-11-11",
    "19-11-18",
    "19-11-25",
    "19-12-02",
    "19-12-09",
]

const year2data = [
    "18-03-26",
    "18-04-02",
    "18-04-09",
    "18-04-16",
    "18-04-23",
    "18-04-30",
    "18-05-07",
    "18-05-14",
     "18-05-21",
    "18-05-28",
    "18-06-04",
    "18-06-11",
    "18-06-18",
    "18-06-25",
    "18-07-02",
    "18-07-09",
    "18-07-16",
    "18-07-23",
    "18-07-30",
    "18-08-06",
    "18-08-13",
    "18-08-20",
    "18-08-27",
    "18-09-03",
    "18-09-10",
    "18-09-17",
    "18-09-24",
    "18-10-01",
    "18-10-08",
    "18-10-15",
    "18-10-22",
    "18-10-29",
    "18-11-05",
    "18-11-12",
    "18-11-19",
    "18-11-26",
]

const year1data = [
    "17-07-03",
    "17-07-10",
    "17-07-17",
    "17-07-24",
    "17-07-31",
    "17-08-07",
    "17-08-14",
    "17-08-21",
    "17-08-28",
    "17-09-04",
    "17-09-11",
    "17-09-18",
    "17-09-25",
    "17-10-02",
    "17-10-09",
    "17-10-16",
    "17-10-23",
    "17-10-30",
]

const yearData = [
    {year: "2019", data: year3data},
    {year: "2018", data: year2data},
    {year: "2017", data: year1data}
]

function DateChanged(newDate, dispatch, dateState) {
    dateState == "add" ? dispatch(addDate({date: newDate})) : dispatch(removeDate({date: newDate}))
    const state = store.getState()
    const addedDates = pointData.features.filter(element => state.dateStore.initialDateArray.every(dateArr => element.dates.includes(dateArr.date)))
    dispatch(addMapLocation({locations: addedDates}))
}

export function SelectDatePopup() {
    const [selectedYearIndex, setSelectedYearIndex] = useState(0)
    const [selectedDate, setSelectedDate] = useState(0)
    const dispatch = useDispatch()

    return (
        <div className="h-48 w-full ">
            <div className='absolute top-2 right-2'>
                <CustomButton text="Add Date" image={<CalendarCheck size={20}></CalendarCheck>} onButtonClick={() => console.log(yearData[selectedYearIndex].data[selectedDate])}></CustomButton>
            </div>

            <div className="h-10 w-full gap-x-2 flex flex-col relative items-center justify-center top-36">
                <div className="flex flex-row relative gap-x-20 w-full items-center justify-center h-2">
                    <CustomDatePicker title="Year" getterValue={selectedYearIndex} setterValue={setSelectedYearIndex} array={yearData.map((yearIndex) => yearIndex.year)}></CustomDatePicker>

                    <CustomDatePicker title="Date" getterValue={selectedDate} setterValue={setSelectedDate} array={yearData[selectedYearIndex].data}></CustomDatePicker>
                </div>
        </div>
        </div>
    )
}

export function stringToDate(date) {
    var date = new Date(date);
    return date.toDateString();
}