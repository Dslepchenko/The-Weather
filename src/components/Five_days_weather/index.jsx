import { Box, Grid } from "@mui/material";
import React from "react";
import FiveDaysWeatherItem from "../Five_days_weather_item";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

const FiveDaysWeather = () => {
  const classes = useStyles();
  const weather = useSelector((state) => {
    return state.weather;
  });

  return (
    <Box className={classes.boxWrapper}>
      <Grid container>
      {weather.days.map((day, i) => {
        return (
          <Grid key={i} item minHeight='200px' xs={2.4}>
          <FiveDaysWeatherItem
            key={i}
            day={new Date(day.Date).getDay()}
            temp={day.Temperature.Maximum.Value}
            icon={day.Day.Icon}
          />
          </Grid>
        );
      })}
      
      </Grid>
    </Box>
  );
};

export default FiveDaysWeather;
