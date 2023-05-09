import React, { useState } from "react";
import { ImageGrid } from "../components/components";
import { useSelector } from 'react-redux'
import { CustomDatePicker } from "../components/customComponents";

function MainPage() {
    const imageArray = useSelector((state) => state.imageStore);
    const [selectedYearIndex, setSelectedYearIndex] = useState(0)
    console.log(imageArray)
    return (
        <div className="">
        {imageArray.initialImageArray.L ? <h1 className='text-4xl text-black dark:text-white flex items-center justify-center'>Select images</h1> : 

        <CustomDatePicker title="Year" getterValue={selectedYearIndex} setterValue={setSelectedYearIndex} array={imageArray.initialImageArray.map((yearIndex) => yearIndex.year)}></CustomDatePicker>
        }
</div>

    )
}

export default MainPage;