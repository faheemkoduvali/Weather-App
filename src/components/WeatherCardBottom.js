import React from 'react'
import CustTabs from './CustTabs'
import './easy-responsive-tabs.css'
import LeftBottom from './LeftBottom';

function WeatherCardBottom({data,f_data}) {
    function retrieveDate(utcSeconds)
    {
        var d = new Date(0);
        d.setUTCSeconds((-330*60)+utcSeconds+data.timezone);

        return d
    }
    var d=retrieveDate(data.dt)
    const day=d.toDateString().split(" ")[0]
    return (
        <div className="weather_card_bottom">
            <div className="wc_bottom_left">
                <LeftBottom data={data} retrieveDate={retrieveDate} />
            </div>
            <div className="wc_bottom_right">
                <CustTabs f_data={f_data} day={day}/>
            </div>
        </div>
    )
}

export default WeatherCardBottom
