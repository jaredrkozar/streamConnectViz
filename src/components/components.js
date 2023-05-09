import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import React, { useState, Fragment } from "react";
import { addSelectedLocation, removeSelectedLocation } from "../reducers/locationListManager";
import { useDispatch, useSelector } from 'react-redux';
import {store} from "../store";
import { CustomTable, CustomTableRow } from "./customComponents";

export function LocationTable() { 
    //creates the location table

    const selectedLocations = useSelector((state) => state.locationStore);
    const dispatch = useDispatch()
    return (
        //takes in list of locations and maps over them. FOr each location it creates a row wiith a delete button
        <CustomTable>
        {selectedLocations.initialArray.map(location => (
            <CustomTableRow key={location.id} onDelete={() => ItemSelected(location.name, location.id, location.date, true, dispatch)}>
                 <h1 className="text-xl font-semibold text-inherit">{location.name}</h1>
                <h1 className="text-lg font-medium text-inherit">{location.id}</h1>
                <h1 className="text-lg font-medium text-inherit">{location.date}</h1>
            </CustomTableRow>
        ))}
    </CustomTable>
    )
};

export function Map() {
    //creates the map and the popover when user clicks on a pin
    const auth = useSelector(state => state.locationStore);
    const dateArray = useSelector(state => state.dateStore);
    const [currentLocation, setCurrentLocation] = useState([]);
    const [currentDate, setCurrentDate] = useState();
    const dispatch = useDispatch()

    const handleDateChange = (e) => {
        setCurrentDate(e.target.value)
    }
    return (
     <div className="w-full relative h-96">
           
          { dateArray.initialDateArray.length == 0 ?
        <h1 className="bg-slate-700 rounded-lg h-full w-full flex items-center justify-center text-slate-500 font-bold text-center text-3xl">
            Add some dates in the tab on the right to view locations
        </h1> : (
            <div className="h-full w-full relative rounded-lg dark:invert dark:hue-rotate-180 dark:saturate-50 dark:brightness-100 dark:contrast-50	">
        <MapContainer className="absolute top-0 bottom-0 w-full" center={[41.519, -72.6617]}
      zoom={13}
      scrollWheelZoom={true} >
          <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
  
          {auth.mapArray.locations != undefined && auth.mapArray.locations.map((park, index) => (
            <Fragment key={index}>
                          <Marker key={index} position={[
          park.geometry.coordinates[1],
          park.geometry.coordinates[0]
          ]} eventHandlers={{
            click: (e) => {
                
                setCurrentLocation({name: park.properties.locationName, id: park.properties.staSeq})
            },
          }}>
           <Popup key={park.properties.staSeq}>
          
          <h1 className="bold text-lg">{currentLocation.name}</h1>
          <h1 className="bold text-lg">{currentLocation.id}</h1>

          <label htmlFor="cars">Choose a date:</label>
            <select name="cars" id="cars" value={currentDate} onChange={handleDateChange}>
            {dateArray.initialDateArray.map((date, index) => (
            <option value={date.date} key={index}>{date.date}</option>
        ))}
            </select>

          <button className = "dark:border-sky-600 text-sky-600" onClick={() =>ItemSelected(currentLocation.name, currentLocation.id, currentDate ?? dateArray.initialDateArray[0].date, IsItemInArray(park.properties.staSeq, currentDate ?? dateArray.initialDateArray[0].date), dispatch)}>Submit</button>
        
          </Popup>
          </Marker>
            </Fragment>
          ))}
  </MapContainer>
        </div>
        )}
     </div>
    )
};

export function ImageGrid(props) {
    //creates the grid on the right hand side of the screen
    return (
        <div className="relative overflow-auto flex flex-col flex-gap-4">
        <div className="flex flex-row gap-x-44 h-12 w-full">
            <h1 className="bold text-2xl">Locations</h1>
            <h1 className="bold text-2xl">Mon</h1>
            <h1 className="bold text-2xl">Tue</h1>
            <h1 className="bold text-2xl">Wed</h1>
            <h1 className="bold text-2xl">Thurs</h1>
            <h1 className="bold text-2xl">Fri</h1>
            <h1 className="bold text-2xl">Sat</h1>
            <h1 className="bold text-2xl">Sun</h1>
        </div>
        {
            props.imageArray == undefined ? <h1 className="text-2xl flex justify-center items-center">No locations selected. Select some locations above to view images for that location</h1>: 
            props.imageArray.map((row, id) => 
                row[1] == undefined ? <h1 className="text-2xl flex justify-center items-center">There are no pictures at {row[0]} for this date</h1> : <GridRow row ={row} key={id}></GridRow>
            )
        }
        </div>
    )
};

function GridRow(props) {
    //a row of images
    return (
        <div className="grid grid-cols-8 w-full h-28 items-center">
        <h1 className="text-2xl">{props.row[0]}</h1>

        {
            props.row[1].map((image, id) => 
            <GridImage imageFilePath={image[0]} columnNumber={returnColumnPlacement(image[1])} color={returnColor(image[2])} key={id}></GridImage>
            )
        }
         </div>
    )
};

function GridImage(props) {
    
    //a single image with a color representing ?????????
    const gapImage = 'pr-20 col-start-' + props.columnNumber + ' col-end-' + (props.columnNumber + 1);
    const colorBox = ' w-40 h-28 ' + (props.color);

    return (
        <div className={gapImage}>
            <div className={colorBox}>
                <img className="relative h-5/6 w-full" src={require("../thumbs/" + props.imageFilePath)}></img>
            </div>
        </div>
    )
};

function returnColumnPlacement(day) {
    //returns the column that corresponds to the day
    switch(day) {
        case 'Mon':
          return 2;
        case 'Tues':
            return 3;
        case 'Wed':
            return 4;
        case 'Thur':
            return 5;
        case 'Fri':
            return 6;
        case 'Sat':
            return 7;
        case 'Sun':
            return 8;
        default:
          return 0;
      }
}


function returnColor(num) {
    //returns the color that corresponds with ????????????
    if (num < 1.9) {
          return 'bg-red-500 dark:bg-red-400';
    } else if (num <= 2.9) {
            return 'bg-orange-600 dark:bg-orange-400';
    } else if (num <= 3.9) {
            return 'bg-yellow-600 dark:bg-yellow-400';
    } else if (num <= 4.9) {
            return 'bg-green-600 dark:bg-green-400';
    } else if (num <= 5.9) {
            return 'bg-blue-600 dark:bg-blue-400';
    } else if (6.0 <= num) {
            return 'bg-purple-600 dark:bg-purple-400';
      }
}


function ItemSelected(locationName, locationID, locationDate, isInArray, dispatch) {
    if (isInArray == true) {
        dispatch(removeSelectedLocation({id: locationID, date: locationDate}))
    } else {
        dispatch(addSelectedLocation({name: locationName, id: locationID, date: locationDate}))
    }
}

function IsItemInArray(locationId, locationDate) {
    const state = store.getState()
    const isInArray = state.locationStore.initialArray.some(location => (location.id == locationId) && (location.date == locationDate))
    return isInArray
}