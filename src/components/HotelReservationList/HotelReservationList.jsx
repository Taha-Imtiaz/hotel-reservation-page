import React from 'react'
import HotelReservationListItem from '../HotelReservationListItem/HotelReservationListItem'
import "./HotelReservationList.css"

const HotelReservationList = ({ filteredData }) => {
    return (
        <div className="hotel-reservation-list">
            {filteredData && filteredData.map((item) => <HotelReservationListItem key={item._id} {...item} />)}



        </div>
    )
}

export default HotelReservationList
