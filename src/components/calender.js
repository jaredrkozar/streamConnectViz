import { Calendar, XCircleFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import { Listbox } from '@headlessui/react'

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

export const year3data = [
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

const yearData = [
    {year: "2019", data: year3data}
]

export function SelectDatePopup() {
    const [selectedYear, setSelectedYear] = useState(year3data[0].year)
    return (
        <div className="relative h-48">
            <Listbox className="relative top-20" value={selectedYear} onChange={setSelectedYear}>
                <Listbox.Button className={"relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"}>{selectedYear}</Listbox.Button>
                <Listbox.Options>
                    {yearData.map((person) => (
                    <Listbox.Option
                        key={person.year}
                        value={person.year}
                    >
                        {person.year}
                    </Listbox.Option>
                    ))}
                </Listbox.Options>
                </Listbox>
        </div>
    )
}