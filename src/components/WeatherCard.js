import React from 'react'
import WeatherCardTop from './WeatherCardTop'
import WeatherCardBottom from './WeatherCardBottom'


function WeatherCard({data,f_data}) {
    if(!data){
        return (
        <div className="weather_card">
            {/* <WeatherCardBottom data={data}/> */}
        </div>
        )
    }
    return (
        <div className="weather_card">
            {/* <CityPicker /> */}
            <WeatherCardTop  data={data}/>
            <WeatherCardBottom data={data} f_data={f_data.data}/>
        </div>
    )
}

export default WeatherCard
