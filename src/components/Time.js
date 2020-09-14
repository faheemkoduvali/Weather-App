import React, { useState, useEffect } from 'react'

function Time({off_time}) {
    const [time,setTime]=useState(" ")
    // function startTime(){
    //     setInterval(() => {
    //     let d = new Date();
    //     d.setUTCSeconds((-330*60)+off_time+d.getUTCSeconds());
    //     d=d.toTimeString().split(" ")[0]
    //     setTime(d)
    // },[time])
    // }
    useEffect(() => {
         setInterval(() => {
            let d = new Date();
            d.setUTCSeconds((-330*60)+off_time+d.getUTCSeconds());
            d=d.toTimeString().split(" ")[0]
            setTime(d)
        },Time)   
        return () => {
            // clearInterval(time_int)
        }
      })
    return (<div className="Time">{time}</div>)
}

export default Time
