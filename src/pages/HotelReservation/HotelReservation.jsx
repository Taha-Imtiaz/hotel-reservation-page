import React, { Fragment } from 'react'
import HotelReservationLeftContent from '../../components/HotelReservationLeftContent/HotelReservationLeftContent'
import HotelReservationMainContent from '../../components/HotelReservationMainContent/HotelReservationMainContent'
import "./HotelReservation.css"

const HotelReservation = () => {
    return (
        <Fragment>
            <div className="hotel-reservation-page-area">
                <div className="hotel-reservation-side-content">
                    <HotelReservationLeftContent />
                </div>
                <div className="hotel-reservation-main-content">
                    <HotelReservationMainContent />
                </div>
            </div>
        </Fragment>
    )
}

export default HotelReservation
