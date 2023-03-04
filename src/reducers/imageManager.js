import { createSlice } from "@reduxjs/toolkit";
import { Images } from "react-bootstrap-icons";
import imageData from "../data/img_map.json";
const initialState = {initialImageArray: []};

export const imageSlice = createSlice({
    name: 'imageStore',
    initialState,
    reducers: {
      addImage: (state, action) => {
        state.initialImageArray = []
        const newImageArray = Object.values(imageData);
        //gets all the image data from the week
        const dataArray = newImageArray.filter(week => week.weekstart_date == action.payload.date)[0].data
    
        //creates an array, and goes through all locations in the locationList
        const thirdArray = []
        const locationList = action.payload.locations
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
        
        state.initialImageArray = [...state.initialImageArray, thirdArray];
      },
    },
  });

export const { addImage } = imageSlice.actions