import React, { useEffect, useState } from 'react'
import HotelReservationHeader from '../HotelReservationHeader/HotelReservationHeader'
import HotelReservationList from '../HotelReservationList/HotelReservationList'
import "./HotelReservationMainContent.css"

const HotelReservationMainContent = ({ data, value }) => {
    // console.log(data, value);
    // filter data on the basis of price value that is shown in slider
    const [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        // console.log("CDM");
        let recordsInPriceRange = data.filter((item) => Number(item.price) >= value[0] && Number(item.price) <= value[1])
        // console.log(recordsInPriceRange);
        setFilteredData(recordsInPriceRange)
    }, [value])

    const filterTopHotels = () => {
        let filteredFacilitiesArr = filteredData.map((item) => item.facilities).filter((element, index) => element.length > 0)
        console.log(filteredFacilitiesArr);
        //  find / return the length of filtered hotels
        let hotelArrLength = filteredFacilitiesArr.map((hotel, index) => hotel.length)
        console.log(hotelArrLength);


        let priceArr = filteredData.map((item, index) => item.facilities.length > 0 && Number(item.price)).filter((item => typeof (item) !== 'boolean'))
        console.log(priceArr);

        let filteredDataClone =  filteredData.map((item, index) => item).filter((element) => element.facilities.length > 0 && Number(element.price))
        console.log(filteredDataClone);

    if(filteredDataClone.length > 1) {
        let topPickedHotels = []
        filteredDataClone.forEach((element, index) => {
         if (hotelArrLength[index] >  hotelArrLength[index +1 ] && priceArr[index] <priceArr[index + 1] ) {
             console.log(element);
             topPickedHotels.push(element)
         }
         
        })
        setFilteredData(topPickedHotels)
    }
        // console.log(topPickedHotels);
        
    }
    return (
        <div className="hotel-reservation-main-content-area">
            <div className="hotel-reservation-header">
                <HotelReservationHeader  filteredData={filteredData} filterTopHotels = {filterTopHotels}/>
            </div>
            <div className="hotel-reservation-list">
                <HotelReservationList filteredData={filteredData} />

            </div>

        </div>
    )
}

export default HotelReservationMainContent
