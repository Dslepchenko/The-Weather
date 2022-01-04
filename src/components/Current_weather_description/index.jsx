import React from 'react';
import { Box, Grid} from '@mui/material';
import CurrentWeatherDescriptionItem from '../Current_weather_description_item'
import { useSelector } from 'react-redux';

const CurrentWeatherDescription = () => {
    const weather = useSelector((state) => {
        return state.weather
    })

    return (
        <Box sx={{
            width: "100%",
            maxHeight:'400px',                       
        }}>
            <Grid container >
            <Grid item xs={12} justifyContent='center'>
            <CurrentWeatherDescriptionItem 
            minTemp={weather.currentWeather.minTemp}
            maxTemp={weather.currentWeather.maxTemp}
            dayForecast={weather.currentWeather.dayTime.IconPhrase}
            nightForecast={weather.currentWeather.nightTime.IconPhrase}
            >
            </CurrentWeatherDescriptionItem>
            </Grid>
            </Grid>
           
        </Box>
    );
}

export default CurrentWeatherDescription;
