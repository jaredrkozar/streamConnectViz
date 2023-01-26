import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { Image } from "react-bootstrap-icons";
import { LocationTable, Map, SearchBar } from '../components'

function Sidebar(props) {
  const [lcoationList, setLocationList] = useState([]);
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  const popoverLocationButtonClicked = (locationName, locationID) => {
      if (isItemInLocationList(locationID) == false) {
        addToLocationList(locationName, locationID)
      } else {
        deleteFromLocationList(locationID)
      }
  }

  const addToLocationList = (locationName, locationID) => {
    setLocationList((prevList) => [
      ...prevList,
      {
          name: locationName,
          id: locationID,
      },
  ]);
  }

  const isItemInLocationList = (locationID) => {
    //checks if item is in locationlist and returns array
    const newArr = lcoationList.some(location => locationID === location.id);
    return newArr;
  }

  const deleteFromLocationList = (locationID) => {
    //deletes item from locationlist
    const newArr = lcoationList.filter((location) => location.id !== locationID)
    setLocationList(newArr);
  }

    const changeMonth = (event) => {
        setMonth(event.target.value);
    };
      
    const changeDay = (event) => {
      setMonth(event.target.value);
    };

    const changeYear = (event) => {
      setYear(event.target.value);
    };

  return(
    <div className="space-y-12 left-5 top-20 relative w-full mr-12">
      <SearchBar deleteFunction={deleteFromLocationList} checkLocationFunction={isItemInLocationList} addLocationFunction={addToLocationList}></SearchBar>
      <Map isItemInLocationList={isItemInLocationList} popoverLocationButtonClicked={popoverLocationButtonClicked}></Map>
      <LocationTable locationList={lcoationList} deleteFunction={deleteFromLocationList}></LocationTable>
      <div className="relative">
  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"></path></svg>
  </div>
  <input datepicker type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"></input>
</div>

      <button className="w-full bg-blue-500 dark:bg-sky-600 hover:bg-blue-700 hover:dark:bg-sky-800 text-white font-bold py-2 px-4 rounded-lg h-12" onClick={() => { props.doneButtonAction("17-10-30", lcoationList) }}>
        <div className="justify-center flex items-center gap-4">

          <Image size={25}/>
          <h2 className="text-lg">View Images</h2>
       </div>  
      </button>
      </div>
  )
  }
  
  export default Sidebar;