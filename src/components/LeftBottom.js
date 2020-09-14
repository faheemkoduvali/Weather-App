import React from 'react'

function LeftBottom({data,retrieveDate}) {
    return (
        <div className="wc_bt_left_item_container">
            <div className="wc_bt_left_item">
                <h3>Cloud</h3>
                <p>{data.clouds.all}<span>%</span></p>
            </div>
            <div className="wc_bt_left_item deg">
                <h3>Wind direction</h3>
                <p>{(data.wind.deg)?data.wind.deg:0}<span>°</span></p>
            </div>
            <div className="wc_bt_left_item">
                <h3>Wind</h3>
                <p>{data.wind.speed}<span>Km/h</span></p>
            </div>
            <div className="wc_bt_left_item deg">
                <h3>Feels like</h3>
                <p>{data.main.feels_like}<span>°</span></p>
            </div>
            <div className="wc_bt_left_item">
                <h3>Humidity</h3>
                <p>{data.main.humidity}<span>%</span></p>
            </div>
            <div className="wc_bt_left_item">
                <h3>Pressure</h3>
                <p>{data.main.pressure}<span>hPa</span></p>
            </div>
            <div className="wc_bt_left_item">
                <h3>Sunrise</h3>
                <p>{retrieveDate(data.sys.sunrise).toTimeString().split(" ")[0]}</p>
            </div>
            <div className="wc_bt_left_item">
                <h3>Sunset</h3>
                <p>{retrieveDate(data.sys.sunset).toTimeString().split(" ")[0]}</p>
            </div>
        </div>
    )
}

export default LeftBottom
