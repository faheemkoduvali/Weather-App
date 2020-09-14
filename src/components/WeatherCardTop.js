import React from 'react'
import Time from './Time';

function WeatherCardTop({data}) {
    const src=`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    
    function retrieveDate(utcSeconds)
    {
        let d = new Date(0);
        d.setUTCSeconds((-330*60)+utcSeconds);
        return d
    }

    const date=retrieveDate(data.dt).toDateString().replace(" "," ,")
    return (
        <div className="weather_card_top">
            <div className="wc_top_left">
                <h2>{data.name}</h2>
                <p>{data.weather[0].description}</p>
                <h3>Now</h3>
                <h4>{(data.main.temp).toPrecision(2)}<span>°c</span></h4>
            </div>
            <div className="wc_top_right">
                <img src={src} placeholder="img" alt = "background"/>
                <Time off_time={data.timezone}/>
                <h2>{date}</h2>
            </div>
        </div>
    )
}

export default WeatherCardTop
