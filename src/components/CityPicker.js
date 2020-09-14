import React from 'react'
import list from '../city.list.json'
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import './style.css';


const CityPicker = () => {
 
  
  const city=new Array(list.length)

    for (var i = 0; i < list.length; i++) {

        city[i] = list[i].name

    }

   


  return (
    <div className="slct">
      <DropDownListComponent id="ddlelement" popupHeight="250px" fields={this.fields} filtering={this.onFiltering = this.onFiltering.bind(this)} allowFiltering={true} dataSource={this.searchData} placeholder="Select a country" />
    </div>          
        
    )
}

export default CityPicker