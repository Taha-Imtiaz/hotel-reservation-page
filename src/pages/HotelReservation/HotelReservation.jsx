import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import HotelReservationLeftContent from '../../components/HotelReservationLeftContent/HotelReservationLeftContent'
import HotelReservationMainContent from '../../components/HotelReservationMainContent/HotelReservationMainContent'
import "./HotelReservation.css"

const HotelReservation = () => {
    const [jsonData, setJSONData] = useState([])
    const [price, setPrice] = useState([])
    const [value, setValue] = useState([]);

    // useEffect calls on Component did Mount
    useEffect(() => {

        const fn = async () => {
            fetchHotelJSONData();
        };
        fn();

    }, [])
    const fetchHotelJSONData = async () => {
        let { data } = await axios.get(`./hotelData.json`)
        setJSONData(data)

        //  fetch hotel price and set price Initial value

        let priceArr = data && data.map((item) => parseInt(item.price))
        setPrice(priceArr)
        setValue([priceArr[3], priceArr[14]])

    }


    const handleChange = (event, newValue) => {
        console.log(newValue);
        // console.log(`handle change ----- ${newValue[0]}, ${newValue[1]}`);
        setValue(newValue);


    };
    return (
        <Fragment>
            <div className="hotel-reservation-page-area">
                <div className="hotel-reservation-side-content">
                    <HotelReservationLeftContent
                        price={price}
                        value={value}
                        handleChange={handleChange}
                    />
                </div>
                <div className="hotel-reservation-main-content">
                    <HotelReservationMainContent
                        data={jsonData}
                        value={value}
                    />
                </div>
            </div>
        </Fragment>
    )
}

export default HotelReservation
