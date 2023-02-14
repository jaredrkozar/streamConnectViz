import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import { Image } from "react-bootstrap-icons";
import {TabBar} from "../components/tabBar.js";
import {Map} from "../components/components"

function Sidebar() {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  return(
    <div className="relative h-full flex flex-row gap-x-12 p-20">
      <div className="w-1/2">
        <Map></Map>
      </div>
        <div className="w-1/2">
        <TabBar></TabBar>
        </div>
      </div>
  )
}
  
export default Sidebar;