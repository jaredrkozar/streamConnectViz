import Sidebar from './sidebar/sidebar';
import MainPage from './sidebar/mainPage';
import React, { useState } from "react";
import imageData from "./data/img_map.json";

function App() {
  
  const [locationDateArray, setlocationDateArray] = useState([]);
  
  const showImages = (date, locationList) => {
    //takes in the date and the list of locations as a parameter

    //imports the image data from the directory
    const newImageArray = Object.values(imageData);

    //gets all the image data from the week
    const dataArray = newImageArray.filter(week => week.weekstart_date == date)[0].data

    //creates an array, and goes through all locations in the locationList
    const thirdArray = []
    for (var i = 0; i < locationList.length; i++) {
      
      //geets the data for one location. If the location is in the array
      var val = dataArray[locationList[i].id];
      if (val != undefined) {
        //location name
        const locationArray = [locationList[i].name]

        const imageArray = []
    
        for (var j = 0; j < val.length; j++) {
          //et all paths to images and add them to imagearray (along with number)
          const singleImageArray = []
          singleImageArray.push(val[j][1], val[j][5], val[j][2])
          imageArray.push(singleImageArray)
        }
        locationArray.push(imageArray)
        thirdArray.push(locationArray)
      } else {
        thirdArray.push([locationList[i].name])
      }
    }
  //set thirdarray to locationDateArray
   setlocationDateArray(thirdArray)
  }

  return (
    <div className='bg-white dark:bg-slate-800 dark:text-white'>
        <div className='flex flex-col h-screen'>
          <div className="w-screen h-1/2 relative">
            <Sidebar doneButtonAction={showImages}/>
          </div>
          <div className="w-screen h-1/2 relative">
          <MainPage array={locationDateArray}/>
          </div>
        </div>
    </div>
  )
}

export default App;