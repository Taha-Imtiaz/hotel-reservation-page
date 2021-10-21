import React from 'react'
import HotelReservationHeader from '../HotelReservationHeader/HotelReservationHeader'
import HotelReservationList from '../HotelReservationList/HotelReservationList'
import "./HotelReservationMainContent.css"

const HotelReservationMainContent = () => {
    return (
        <div className="hotel-reservation-main-content-area">
            <div className="hotel-reservation-header">
               <HotelReservationHeader/>
            </div>
            <div className="hotel-reservation-list">
               <HotelReservationList/>

            </div>

        </div>
    )
}

export default HotelReservationMainContent
