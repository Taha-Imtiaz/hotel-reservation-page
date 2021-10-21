import React from 'react'
import TransportationItems from '../TransportationItems/TransportationItems'
import "./HotelReservationListItem.css"

const HotelReservationListItem = (item) => {
    let { name, images, ratings, address, price, transportation, description } = item
    return (
        <div className="hotel-reservation-list-item">
            <div className="hotel-image">
                {images.length > 0 ? <img src={images[0]} alt="" /> : <h2 className="center">Image Not Available</h2>}
            </div>
            <div className="hotel-content-area">
                <div className="hotel-title">
                    <h3>{name.toLowerCase()}</h3>
                    <div className="hotel-ratings">{`${parseInt(ratings)} Stars`}</div>
                    <div className="hotel-type">Hotel</div>
                </div>
                <div className="hotel-lower-area">
                    <div className="hotel-lower-content-left">
                        <div className="hotel-address">
                            {`${address.toLowerCase()}   -   `}
                            <span>Show on Map</span>
                        </div>
                        <div className="transportation-items">
                            {transportation && transportation.map((travelItem, index) => <TransportationItems key={travelItem} travelItem={travelItem} index={index} />)}
                        </div>
                        <div className="hotel-description">
                            <h5>{description[0]}</h5>
                            <div className = "check-in-date">
                                <h3>Check in</h3>
                                <span>{`${new Date().toISOString().split('T')[0]}`.replace(/-/g, '/')}</span>
                            </div>
                            <div  className = "check-out-date">
                                <h3>Check out</h3>
                                <span>{`${new Date().toISOString().split('T')[0]}`.replace(/-/g, '/')}</span>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div className="hotel-lower-content-right">
                        <div className="price-range">Price Start From:</div>
                        <div className = "hotel-price">
                            <h3 className="center">{`Rs ${price}`}</h3>
                            <span className="conditions center">Taxes and Fees Included</span>
                        </div>
                        <div className="reserve-btn">Reserve</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelReservationListItem
