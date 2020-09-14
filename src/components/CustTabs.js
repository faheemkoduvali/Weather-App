import React, { useState, useEffect } from 'react'
import CustTab from './CustTab'

function CustTabs({f_data,day}) {
    console.log(f_data.list)
    const [style,setStyle] = useState(["block","none","none","none","none"])
    var index
    const days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    for(let i=0;i<7;i++)
        if(days[i].substring(0,3)==day)
            {index=i
            break}
    var n_style=style
    function clickHandler (curr)
    {
        for(let i=0;i<5;i++)
            {
                if(i==curr)
                    n_style[i]="block"
                else
                    n_style[i]="none"
            }
        setStyle(n_style.map((style) => style))
    }
    useEffect(() => {
        setStyle(["block","none","none","none","none"])
      },[f_data])
    return (
        <div className="wc_bt_right_container">
            <div className="wc_bt_right_item">
    <           h2 onClick={() =>clickHandler(0)}>Today</h2>
                <CustTab display={style[0]} list={f_data.list} list_start={0} list_end={3}/>
            </div>
            <div className="wc_bt_right_item">
                <h2 onClick={() =>clickHandler(1)}>Tomorrow</h2>
                <CustTab display={style[1]} list={f_data.list} list_start={3} list_end={11}/>
            </div>
                
            <div className="wc_bt_right_item">
                <h2 onClick={() =>clickHandler(2)}>{days[index<=4 ? index+2 : (index-4)]}</h2>
                <CustTab display={style[2]} list={f_data.list} list_start={11} list_end={19}/>
            </div>
            <div className="wc_bt_right_item">
                <h2 onClick={() =>clickHandler(3)}>{days[index<=3 ? index+3 : (index-3)]}</h2>
                <CustTab display={style[3]} list={f_data.list} list_start={19} list_end={27}/>
            </div>
            <div className="wc_bt_right_item">
                <h2 onClick={() =>clickHandler(4)}>{days[index<=2 ? index+4 : (index-2)]}</h2>
                <CustTab display={style[4]} list={f_data.list} list_start={27} list_end={35}/>
            </div>
        </div>
    )
}

export default CustTabs
