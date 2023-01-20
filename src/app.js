import Sidebar from './sidebar/sidebar';
import MainPage from './sidebar/mainPage';
import React, { useState } from "react";
import imageData from "./data/img_map.json";

function App() {
  const [locationDateArray, setlocationDateArray] = useState([]);

  const showImages = (date, locationList) => {
    const newImageArray = Object.values(imageData);

    const dataArray = newImageArray.filter(week => week.weekstart_date == date)[0].data

    const thirdArray = []
    for (var i = 0; i < locationList.length; i++) {

      var val = dataArray[locationList[i].id];
      if (val != undefined) {
        const locationArray = [locationList[i].name]

        const imageArray = []
    
        for (var j = 0; j < val.length; j++) {
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
    console.log(thirdArray)
   setlocationDateArray(thirdArray)
  }

  return (
    <div className='bg-white dark:bg-slate-800 dark:text-white'>
        <div className='flex flex-row gap-x-4'>
          <div className="flex-none h-screen">
            <Sidebar doneButtonAction={showImages}/>
          </div>
          <div className="w-screen h-screen relative left-12 top-12">
          <MainPage array={locationDateArray}/>
          </div>
        </div>
    </div>

  )
}

export default App;