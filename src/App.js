import React,{useState,useEffect} from 'react';
import './App.css';
import './components/style.css';
import { fetchData } from './api'
import WhetherCard from './components/WeatherCard';


function App() {
  const [city,setCity]=useState("london")
  const [data,setData]=useState([])
  useEffect(() => {
    const fetchAPI =async () => {
      setData(await fetchData(city))
  }
  fetchAPI()
  }, [city])
  var temp=""
  const handleCity = (value) => {
    temp=value
  }
  const chooseCity =  () => {
    if(city!==temp && temp!==""){
      setCity(temp)
    }
  }

  return (
    <div className="weather_main">
      <h1>Weather App</h1>
      <div className="input-field">
        <input name="city" type="text" placeholder="Enter City" onChange={(e) => handleCity(e.target.value)}/>
        <button onClick={chooseCity} >submit</button>
      </div>
      <WhetherCard data={data.data} f_data={data.f_data}/>
    </div>
  );
}

export default App;
