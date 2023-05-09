import { createSlice } from "@reduxjs/toolkit";
import { Images } from "react-bootstrap-icons";
import { act } from "react-dom/test-utils";
import imageData from "../data/img_map.json";
const initialState = {initialImageArray: []};

export const imageSlice = createSlice({
    name: 'imageStore',
    initialState,
    reducers: {
      addImage: (state, action) => {
        console.log("action.payload")
      },
    },
  });

export const { addImage } = imageSlice.actions