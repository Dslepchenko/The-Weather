import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import { dayNamesShort } from '../const';
import { useStyles } from './style';

const FiveDaysWeatherItem = ({ day, temp, icon }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        height="60px"
        image={`https://developer.accuweather.com/sites/default/files/${String(icon)
        .padStart(2, "0")}-s.png`}
      />
      <Typography color="white" fontSize="15px" fontWeight="700">
        {dayNamesShort[day]}
      </Typography>
      <Typography color="white" fontSize="20px" fontWeight="700">
        {Math.round(temp)}
        {` °C`}
      </Typography>
    </Card>
  );
};

export default FiveDaysWeatherItem;
