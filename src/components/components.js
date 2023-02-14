import { XLg, Plus, Send } from "react-bootstrap-icons";
import pointData from "../data/sites.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from 'leaflet'
import React, { useState, useContext, Fragment } from "react";
import { addLocation, removeItem } from "../locationListManager";
import { useDispatch, useSelector } from 'react-redux';
import {store} from "../store";

export function LocationTable() { 
    //creates the location table

    const selectedLocations = useSelector((state) => state.locationStore);
    return (
        //takes in list of locations and maps over them. FOr each location it creates a row wiith a delete button
        <div className="divide-y divide-solid divide-gray-300 overflow-auto relative h-80 bg-inherit">
        {selectedLocations.initialArray.map(location => (
            TableRow(location.name, location.id, true)
        ))}
            
    </div>
    )
};

function TableRow(locationName, locationID, isInList)  {
    const dispatch = useDispatch()

    const icon = () => {
        if (isInList == true) {
            return <XLg size={32}/> 
        } else {
            return <Plus size={32}/>
        }
    }
    return (
              <div className="flex items-center justify-between items-center h-20 bg-inherit" key={locationID}>
                <div className="inline-block">
                    <h1 className="text-xl font-semibold text-inherit">{locationName}</h1>
                    <h1 className="text-lg font-medium text-inherit">{locationID}</h1>
                </div>

          <button className = "relative dark:border-sky-600 text-sky-600" onClick={event => ItemSelected(locationName, locationID, isInList, dispatch)}>
            {icon(isInList)}
         </button>

          </div>
    )
}

export function Map() {
    //creates the map and the popover when user clicks on a pin
    const [currentLocation, setCurrentLocation] = useState([]);
    const auth = useSelector(state => state.locationStore);
    const dispatch = useDispatch()

    return (
        <div className="relative h-full rounded-lg w-full rounded-lg dark:invert dark:hue-rotate-180 dark:saturate-50 dark:brightness-100 dark:contrast-50	">
        <MapContainer className="absolute top-0 bottom-0 w-full" center={[41.519, -72.6617]}
      zoom={13}
      scrollWheelZoom={true} >
          <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager_nolabels/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
  
          {pointData.features.map((park) => (
            <Fragment key={park.properties.staSeq}>
                          <Marker key={park.properties.staSeq} position={[
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

          <button className = "dark:border-sky-600 text-sky-600" onClick={() =>ItemSelected(currentLocation.name, currentLocation.id, IsItemInArray(park.properties.staSeq), dispatch)}>Submit</button>
        
          </Popup>
          </Marker>
            </Fragment>
          ))}
  </MapContainer>
        </div>
    )
};

export function ImageGrid(props) {
    //creates the grid on the right hand side of the screen
    return (
        <div className="relative overflow-auto">
        <div className="grid grid-cols-8 h-48 w-full">
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
            props.imageArray.map((row, id) => 
                row[1] == undefined ? <h1 className="text-2xl">There are no pictures at {row[0]} for this date</h1> : <GridRow row ={row} key={id}></GridRow>
            )
        }
        </div>
    )
};

function GridRow(props) {
    //a row of images
    return (
        <div className="grid grid-cols-8 w-full h-28">
        <h1>{props.row[0]}</h1>

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
        <div className={gapImage} onClick={imageClicked()}>
            <div className={colorBox}>
                <img className="relative h-5/6 w-full" src={require("../thumbs/" + props.imageFilePath)}></img>
            </div>
        </div>
    )
};

function imageClicked() {
    // fetch(, {
        // method: "GET"
    // }) 
//     .then(function(response) { return response.json(); })
// .then(function(json) {

// }
}

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

export function SearchLocations() {

  const [searchField, setSearchField] = useState("");

    const filteredLocations = pointData.features.filter( person => {
        return (
            searchField != "" ? person.properties.locationName.includes(searchField) : null
        );
      })

      return (
        <div className="py-4 h-80 overflow-auto">
            <input type="text" className="h-16 w-full bg-slate-600 rounded-lg hover:bg-slate-500 focus:bg-slate-500" value={searchField} onChange={event => setSearchField(event.target.value)}
            />

            <div className="relative w-full">

                {
                filteredLocations.map((location, id) => 
                     TableRow(location.properties.locationName, location.properties.staSeq, IsItemInArray(location.properties.staSeq))
                )
                }
            </div>
        </div>
      )
}

export function ButtonCreator(props) {
    return (
        <div className="">
            <button class="relative w-12 overflow-hidden inline-flex hover:w-96 gap-x-4 p-2 bg-sky-700">
                <XLg size={20}/>
                <h1>Drrrr</h1>
            </button>
        </div>
    )
}

function ItemSelected(locationName, locationID, isInArray, dispatch) {
    console.log(isInArray)
    if (isInArray == true) {
        dispatch(removeItem(locationID))
    } else {
        dispatch(addLocation({name: locationName, id: locationID}))
    }
}

function IsItemInArray(locationId) {
    const state = store.getState()
    const isInArray = state.locationStore.initialArray.some(location => location.id == locationId)
    return isInArray
}