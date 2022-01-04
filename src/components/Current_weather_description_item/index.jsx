import React from "react";
import { Box, Typography, Grid} from "@mui/material";
import { useStyles } from "./style";
import FiveDaysWeather from "../Five_days_weather";
const CurrentWeatherDescriptionItem = ({minTemp,maxTemp,dayForecast,nightForecast,}) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.boxWrapper}>
       <Grid container>
      <Grid item xs={12} justifyItems='center' margin="20px 20px 20px 20px">

          <Grid container >
            <Grid item xs={6}>
              <Typography color='white' variant="h6" >Min Temp</Typography>
            </Grid>
            <Grid item xs={6}  textAlign='end' >
              <Typography color='white' variant="h6">
                {minTemp}
                {` °C`}
              </Typography>
            </Grid>
          </Grid>
       
          <Grid container>
            <Grid item xs={6}>
              <Typography color='white' variant="h6">Max Temp</Typography></Grid>
            <Grid item xs={6}>
              <Typography color='white' textAlign='end' variant="h6">
                {maxTemp}
                {` °C`}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              <Typography color='white' variant="h6">Day forecast</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color='white' textAlign='end' variant="h6">
                {dayForecast}
              </Typography>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item xs={6}>
              <Typography color='white' variant="h6">Night forecast</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography color='white' textAlign='end' variant="h6">
                {nightForecast}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} justifyItems='center' margin="20px 20px 20px 20px">
        <FiveDaysWeather />
      </Grid>

    </Box>
  );
};

export default CurrentWeatherDescriptionItem;
