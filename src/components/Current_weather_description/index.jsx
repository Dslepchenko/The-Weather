import React from 'react';
import { Box} from '@mui/material';
import CurrentWeatherDescriptionItem from '../Current_weather_description_item'
import FiveDaysWeather from '../Five_days_weather'
import { useSelector } from 'react-redux';

const CurrentWeatherDescription = () => {
    const weather = useSelector((state) => {
        return state.weather
    })

    return (
        <Box sx={{
            display:'grid',
            gridTemplateRows:'40% 60%',
            alignItems:'center',
            justifyItems:'center',
            padding:'20px',
            '@media (max-width: 1100px)' : {
                width:'95%',
                height:'80%',
                justifySelf:'center',
                alignSelf:'center',
                gap:'10px',
              },
              '@media (max-width: 768px)' : {
                gridTemplateRows:'40% 55%',
                gap:'0px'
              },
              
        }}>
            <CurrentWeatherDescriptionItem 
            minTemp={weather.currentWeather.minTemp}
            maxTemp={weather.currentWeather.maxTemp}
            dayForecast={weather.currentWeather.dayTime.IconPhrase}
            nightForecast={weather.currentWeather.nightTime.IconPhrase}
            />
            <FiveDaysWeather/>
           
        </Box>
    );
}

export default CurrentWeatherDescription;
