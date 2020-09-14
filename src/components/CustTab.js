import React from 'react'

function CustTab({display,list,list_start,list_end}) {
    function time(dt_txt) {
         let time =  parseInt(dt_txt.split(" ")[1].split(":")[0])
         console.log(time)
         let str_time = time === 12 ? `${time} PM` :(time > 12 ? `${time-12} PM` : (time === 0 ? `12 AM`:`${time} AM`))
         return str_time 
        }
    const n_list=list.slice(list_start,list_end)
    console.log(n_list)
    return (
        <div>
            {n_list.map(list => (
            <div class="wc__bt_right_item_container" style={{display:display}}>
                <div class="wc__bt_right_item_container_left">
                    <p>{time(list.dt_txt)}</p>
                </div>
                <div class="wc__bt_right_item_container_right">
                    <p>{list.main.temp}<i>°c</i><span>{list.weather[0].main}</span></p>
                </div>
                <div class="clear"> </div>
            </div>
            ))}
        </div>
      
    )
}

export default CustTab
