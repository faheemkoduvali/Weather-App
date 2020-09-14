import axios from 'axios'

const api_key='75dd75e6c630c9692b4b97b79d560a98'


export const fetchData = async (city) => {

    var url,f_url
    if(city) {
        url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
        f_url=`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api_key}&units=metric`
    }


    try {
        const f_data= await axios.get(f_url)
        const {data} = await axios.get(url)
        console.log(f_data)
        return {data,f_data}
    
    } catch(error) {
        console.log(error)
    }
}

