import { Grid, CardMedia, Typography } from "@mui/material";
import React from "react";
import { dayNamesShort } from '../../const';


const FiveDaysWeatherItem = ({ day, temp, icon }) => {

  return (
    <Grid container maxHeight='200px'
    minHeight='147px'
      alignContent='stretch'
      flexDirection='column'
      justifyContent='space-around'
      alignItems='center'
      xs={12} >

      <Grid item>
        <CardMedia
          component="img"
          height="60px"
          image={`https://developer.accuweather.com/sites/default/files/${String(icon)
            .padStart(2, "0")}-s.png`}
        />
      </Grid>

      <Grid item>
        <Typography color="white" variant="h6" fontWeight="700">
          {dayNamesShort[day]}
        </Typography>
      </Grid>

      <Grid item>
        <Typography color="white" variant="h6" fontWeight="700">
          {Math.round(temp)}
          {` °C`}
        </Typography>
      </Grid>

      </Grid>
  );
};

export default FiveDaysWeatherItem;
