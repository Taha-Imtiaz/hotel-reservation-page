
import React from 'react'
import AirportIcon from "../../images/icons8-airport-96.png"
import RailsIcon from "../../images/icons8-train-tracks-96.png"
import SubwayIcon from "../../images/icons8-subway-96.png"
import CruiseIcon from "../../images/icons8-cruise-96.png"


import "./TransportationItems.css"

const TransportationItems = ({ travelItem, index }) => {
    console.log(travelItem, index);
    return (
        <div className="transportation-items-row">
            <img src={index === 0 ? AirportIcon : index === 1 ? RailsIcon : index === 2 ? SubwayIcon : CruiseIcon} alt="" />
            <div>{travelItem}</div>
        </div>
    )
}

export default TransportationItems
