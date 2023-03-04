import React, { useState } from "react";
import imageData from "../thumbs/S14400_D062419_071619_36_DATE19-06-24_Mon_13_L4.0.JPG";
import { ImageGrid } from "../components/components";
import { useSelector } from 'react-redux'
import {store} from "../store";

function MainPage(props) {
    const [imageList, setImageList] = useState([]);
    const getMonday = (date = null) => {
        //from https://stackoverflow.com/questions/35088088/javascript-for-getting-the-previous-monday/52750444#52750444
        const prevMonday = date && new Date(date.valueOf()) || new Date()
        prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7)
        return prevMonday
    }
    
    const imageArray = useSelector((state) => state.imageStore);
    return ( 
        <div className="">
            {imageArray.initialImageArray == undefined ? <h1 className='text-4xl text-black dark:text-white flex items-center justify-center'>Select images ajjffjjf0klf,cl</h1> : 
            
            <ImageGrid imageArray={imageArray.initialImageArray[0]}/>
            }
        </div>
    )
}

export default MainPage;