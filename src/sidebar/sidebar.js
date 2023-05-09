import "leaflet/dist/leaflet.css";
import React, { useState, Suspense} from "react";
import {TabBar} from "../components/tabBar.js";
import {Map} from "../components/components"
import { useDispatch, useSelector } from 'react-redux';
import { Images } from "react-bootstrap-icons";
import {store} from "../store";
import { addImage } from "../reducers/imageManager";
import { CustomButton } from "../components/customComponents";
import imageData from "../data/img_map.json";

function Sidebar() {
  return(
    <div className="relative h-full flex flex-row gap-x-12 p-20">
      <div className="w-1/2">
        <Map></Map>
      </div>
        <div className="w-1/2 relative">
        <TabBar></TabBar>
        </div>

        <div className='relative top-2 right-2'>
                <CustomButton text="Get Images" image={ <Images size={26}></Images>} onButtonClick={() => ImageButtonClicked()}></CustomButton>
            </div>
      </div>
  )
}

function ImageButtonClicked() {
  const state = store.getState()
  const selectedLocations = state.locationStore.initialArray
  const newImageArray = Object.values(imageData);

  const allImages = []
  
  selectedLocations.map((location) => {
    newImageArray.map((images) => {
      if (images.weekstart_date == location.date) {

        const splitDate = images.weekstart_date.split("-")

        var year=allImages.findIndex(function(number) {
          return number.year == ("20" + splitDate[0]);
        });
      
      if (year >= 0) {
        var month=allImages[year].months.findIndex(function(item) {
          return item.monthName == returnMonthDay(splitDate[1])
        });

        if (month >= 0) {
          allImages[year].months[month].images.push({images: [images]})
        } else {
          allImages[year].months.push({monthName: returnMonthDay(splitDate[1]), images: [images]})
        }
      } else {
        allImages.push({year: ("20" + splitDate[0]), months: []})
      }

    }})
  })
  console.log("allImages")
  console.log(allImages)
}

function returnMonthDay(month) {
  var monthString = ""

  switch (month) {
    case "01":
      monthString = "January"
      break
    case "02":
      monthString = "Febuary"
      break
    case "03":
      monthString = "March"
      break
    case "04":
      monthString = "April"
      break
    case "05":
      monthString = "May"
      break
    case "06":
      monthString = "June"
      break
    case "07":
      monthString = "July"
      break
    case "08":
      monthString = "August"
      break
    case "09":
      monthString = "September"
      break
    case "10":
      monthString = "October"
      break
    case "11":
      monthString = "November"
      break
    case "12":
      monthString = "December"
      break
  }
  return monthString
}

export default Sidebar;