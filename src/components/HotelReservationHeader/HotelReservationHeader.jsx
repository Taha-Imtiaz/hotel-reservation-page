import { faCaretDown, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import FilterIcon from "./../../images/filter_icon.png"
import "./HotelReservationHeader.css"

const HotelReservationHeader = () => {
    return (
        <div className="hotel-reservation-header-items">
            <div className="hotel-reservation-filter-button">
                <img src={FilterIcon} alt="" />
                <div>Filters</div>
            </div>
            <div>
                <h3>RESULTS</h3>
                <span>Results found</span>
            </div>
            <div className="right-bordered header-center">

                <span>  Our Top Pick</span>
                <FontAwesomeIcon icon={faCaretDown} style = {{color:"#00c2fd"}}/>

            </div>
            <div className="right-bordered header-center">



                <span>
                    Price (Lowest first)
                </span>
                <FontAwesomeIcon icon={faSortDown}  style = {{color:"#00c2fd"}}/>
            </div>
            <div className="header-center" >
                <div>Star Rating</div>
                <FontAwesomeIcon icon={faSortDown} style = {{color:"#00c2fd"}} />

            </div>

        </div>
    )
}

export default HotelReservationHeader
