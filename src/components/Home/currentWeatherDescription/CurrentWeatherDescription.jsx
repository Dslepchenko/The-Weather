import React from 'react';
import { Box} from '@mui/material';
import CurrentWeatherDescriptionItem from './CurrentWeatherDescriptionItem'
import FiveDaysWeather from '../fiveDaysWeather/FiveDaysWeather'
import { useSelector } from 'react-redux';

const CurrentWeatherDescription = () => {
    const weather = useSelector((state) => {
        return state.weather
    })

    return (
        <Box sx={{
            display:'grid',
            gridTemplateRows:'40% 60%',
            alignItems:'center'
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
