import axios from 'axios'
import React, { useEffect, useState } from 'react'
import HotelReservationListItem from '../HotelReservationListItem/HotelReservationListItem'
import "./HotelReservationList.css"

const HotelReservationList = () => {
    const [jsonData, setJSONData] = useState([])

    const fetchHotelJSONData = async () => {
        let {data} = await axios.get(`./hotelData.json`)
        // console.log(data);
        setJSONData(data)
    }
    // useEffect calls on Should Component update
    useEffect(() => {

        const fn = async () => {
            fetchHotelJSONData();
        };
        fn();

    }, [])

    return (
        <div className="hotel-reservation-list">
            {jsonData && jsonData.map((item) => <HotelReservationListItem key = {item._id} {...item}/>)}
            {/* <HotelReservationListItem />
            <HotelReservationListItem />
            <HotelReservationListItem />
            <HotelReservationListItem /> */}


        </div>
    )
}

export default HotelReservationList
