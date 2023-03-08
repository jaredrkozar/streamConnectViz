import { Calendar, XCircleFill, CalendarCheck } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import classNames from 'classnames';

export function DatesTable() { 
    //creates the location table

    const selectedDates = useSelector((state) => state.dateSlice);
    return (
        //takes in list of locations and maps over them. FOr each location it creates a row wiith a delete button
        <div className="divide-y divide-solid divide-gray-300 overflow-auto relative h-80 bg-inherit">
        {selectedDates.initialDateArray.map(date => (
            CalenderTableRow(date.toDateString())
        ))}
            
    </div>
    )
};

function CalenderTableRow(date)  {
    const dispatch = useDispatch()

    return (
              <div className="flex items-center justify-between items-center h-20 bg-inherit" key={date}>
                <div className="inline-block">
                    <h1 className="text-xl font-semibold text-inherit">{date}</h1>
                </div>

        <div className="">
        <button className = "relative dark:border-sky-600 text-sky-600" onClick={event => console.log("SELECTED")}>
            <Calendar/>
         </button>

         <button className = "relative dark:border-sky-600 text-sky-600" onClick={event => console.log("SELECTED")}>
            <XCircleFill/>
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

const stringToDate = (date) => {
    var date = new Date(date); 
    return date.toDateString();
}

function CustomDatePicker(props) {
    const isYearPicker = (props.title == "Year")

    return (
        <div className="relative h-48">
        <h1 className="bold">{props.title}</h1>
        <div className="relative h-1/2">
            <Listbox value={props.getterValue} onChange={props.setterValue}>
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-slate-600 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"><h1>{isYearPicker ? props.array[props.getterValue].year : stringToDate("20" + props.getterValue)}</h1></Listbox.Button>
            <Listbox.Options>
                {props.array.map((person, index) => (
                <Listbox.Option
                    key={index}
                    value={isYearPicker ? index : person}
                >
                    {isYearPicker ? person.year : stringToDate("20" + person)}
                </Listbox.Option>
                ))}
            </Listbox.Options>
            </Listbox>
        </div>
        </div>
    )
}

export function SelectDatePopup() {
    const [selectedYearIndex, setSelectedYearIndex] = useState(0)
    const [selectedDate, setSelectedDate] = useState(yearData[selectedYearIndex].data[0])
    
    return (
        <div className="h-48 w-full ">
            <div className='absolute top-2 right-2'>
                <button className='bg-navyBlue-500 hover:bg-navyBlue-600 dark:bg-navyBlue-600 dark:hover:bg-navyBlue-700 hover:ease-out duration-500 w-16 lg:w-fit h-12 p-1 pointer-events-auto flex flex-row items-center gap-x-4 group rounded-lg text-xl font-medium text-white overflow-hidden' onClick={event => console.log("SLSLSL")}>
                    <div className='items-center'>Add Date</div>
                    <CalendarCheck size={20}></CalendarCheck>
                </button>
            </div>

            <div className="h-10 w-full gap-x-2 flex flex-col relative items-center justify-center top-36">
                <div className="flex flex-row relative gap-x-20 w-full items-center justify-center h-2">
                    <CustomDatePicker title="Year" getterValue={selectedYearIndex} setterValue={setSelectedYearIndex} array={yearData}></CustomDatePicker>

                    <CustomDatePicker title="Date" getterValue={selectedDate} setterValue={setSelectedDate} array={yearData[selectedYearIndex].data}></CustomDatePicker>
                </div>
            <h1>The currently selected date is {stringToDate("20" + selectedDate)}</h1>
        </div>
        </div>
    )
}