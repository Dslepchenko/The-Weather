import axios from "axios";
const baseUrl = 'http://dataservice.accuweather.com';
const API= 'gdwoaNtBsfRUJyXr4GHGgBLDf5vVyB07';

//currentconditions/v1
//locations/v1/cities/autocomplete
//Temperature.Metric.Value

export const  getCurrentWeather = async (city)=>{
    const url = `${baseUrl}/currentconditions/v1/${city}?apikey=${API}`;
    const data = await axios.get(url)
        return data.data[0]
    
}

export const getLocation = async (q) =>{
    const url = `${baseUrl}/locations/v1/cities/autocomplete?apikey=${API}&q=${q}`;
    const data = await axios.get(url)
        return data.data || [];
}

export const getFiveDayForecast = async (city)=>{
    const url = `${baseUrl}/forecasts/v1/daily/5day/${city}?apikey=${API}&metric=true`;
    const data = await axios.get(url)
        return data.data.DailyForecasts
    
}