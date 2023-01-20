import React, { useState } from "react";
import imageData from "../data/img_map.json";
import { ImageGrid } from "../components";
function MainPage(props) {
    const [imageList, setImageList] = useState([]);

    const getMonday = (date = null) => {
        //from https://stackoverflow.com/questions/35088088/javascript-for-getting-the-previous-monday/52750444#52750444
        const prevMonday = date && new Date(date.valueOf()) || new Date()
        prevMonday.setDate(prevMonday.getDate() - (prevMonday.getDay() + 6) % 7)
        return prevMonday
    }

    return ( 
        <div className="">
            {props.array == undefined ? <h1 className='text-4xl text-black dark:text-white flex items-center justify-center'>Select images ajjffjjf0klf,cl</h1> : 
            
            <ImageGrid imageArray={props.array}/>
            }
        </div>
    )
}

export default MainPage;