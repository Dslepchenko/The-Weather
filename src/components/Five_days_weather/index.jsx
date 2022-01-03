import { Box } from "@mui/material";
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
      {weather.days.map((day, i) => {
        return (
          <FiveDaysWeatherItem
            key={i}
            day={new Date(day.Date).getDay()}
            temp={day.Temperature.Maximum.Value}
            icon={day.Day.Icon}
          />
        );
      })}
    </Box>
  );
};

export default FiveDaysWeather;
