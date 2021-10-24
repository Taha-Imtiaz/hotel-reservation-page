import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from '@mui/material'
import React, { useState } from 'react'
import "./HotelReservationFilters.css"
import { faCaretDown, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import StarRatings from '../StarRatings/StarRatings';

const HotelReservationFilters = ({ price, value, handleChange }) => {

    var priceMinValue = price[0]
    var priceMaxValue = price[price.length - 1]


    return (
        <div className="hotel-reservation-filter-area">
            <div className="price-filter">
                <div className="price-heading">
                    <h2>Price</h2>
                    <FontAwesomeIcon icon={faCaretDown} size="2x" color="#00c2fd" />
                </div>

                <Slider
                    value={value}

                    step={300000}
                    onChange={handleChange}
                    min={priceMinValue}
                    max={priceMaxValue}
                    valueLabelDisplay="on"
                    color="secondary"
                />
                <div>
                    <h3>
                        {`From Rs ${value[0]} to Rs ${value[1]}`}
                    </h3>
                </div>
            </div>

            <div className="meal-filter">

                <div className="meal-heading">
                    <h2>Meal Type</h2>
                    <FontAwesomeIcon icon={faCaretDown} size="2x" color="#00c2fd" />
                </div>
                <div className="meal-filter-options">

                    <div >   <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>Room Only</span>

                    <div> <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>Bed & BreakFast</span>



                    <div>  <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /></div>
                    <span>Olny Bed</span>



                    <div>   <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>Nomeal</span>


                    <div> <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /></div>
                    <span>Breakfast</span>

                </div>


            </div>
            <div className="hotel-filter">
                <div className="hotel-heading">
                    <h2>Hotel Type</h2>
                    <FontAwesomeIcon icon={faCaretDown} size="2x" color="#00c2fd" />
                </div>
                <div className="hotel-filter-options">

                    <div>   <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>Hotel</span>

                    <div> <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>Hotels</span>
                </div>

            </div>
            <div className="rating-filter">
                <div className="rating-heading">
                    <h2>Star Rating</h2>
                    <FontAwesomeIcon icon={faCaretDown} size="2x" color="#00c2fd" />
                </div>
                <div className="rating-filter-options">
                    <div>   <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>2 Stars</span>
                    <div className="star-rating"> {[...Array(2)].map((item, index) =>
                        <StarRatings />)}
                    </div>


                    <div> <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>3 Stars</span>
                    <div className="star-rating">
                        {[...Array(3)].map((item, index) => <StarRatings />)}

                    </div>


                    <div>   <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>4 Stars</span>
                    <div className="star-rating">
                        {[...Array(4)].map((item, index) => <StarRatings />)}
                    </div>

                    <div> <FontAwesomeIcon icon={faCheckCircle} color="#00c2fd" /> </div>
                    <span>5 Stars</span>
                    <div className="star-rating">
                        {[...Array(5)].map((item, index) => <StarRatings />)}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default HotelReservationFilters
