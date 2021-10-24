import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Switch } from '@mui/material'
import "./HotelReservationLeftContent.css"
import HotelReservationFilters from './../HotelReservationFilters/HotelReservationFilters';


const HotelReservationLeftContent = ({ price, value, handleChange }) => {

    return (
        <div className="hotel-reservation-left-content-area">
            <div className="hotel-reservation-left-content">
                <div className="hotel-reservation-left-upper-row-content">
                    <div className="hotel-reservation-left-upper-row-close-btn">
                        <FontAwesomeIcon icon={faTimes} />
                    </div>
                    <div className="hotel-reservation-left-upper-row-box">
                        <h3 >Our Advice</h3>
                        <div className="great-booking-time">Now it is Great time to book</div>
                        <div className="travel-content ">Prices are unlikely to get any better before you travel</div>
                        <div className="price-alert-row">
                            <h3>Price</h3>
                            <div>
                                <Switch />
                            </div>
                        </div>


                    </div>
                </div>
                <div className="hotel-reservation-left-content-filters">
                    {price.length > 0 && <HotelReservationFilters
                        price={price}
                        value={value}
                        handleChange={handleChange}

                    />}

                </div>
            </div>
        </div>
    )
}

export default HotelReservationLeftContent
