import React from "react";
import { Box, Card, Typography, Button } from "@mui/material";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../../../store/slices/favorites";
import { dayNames, monthsNames } from "./const";

const CurrentWeatherItem = () => {
  const weather = useSelector((state) => {
    return state.weather;
  });

  const dispatch = useDispatch();
  const favorites = useSelector((state) => {
    return state.favorites.items;
  });

  const isFavorite = favorites.find((item) => {
    return item.city === weather.currentWeather.city;
  });

  const deleteFromFavorite = () => {
    dispatch(deleteFavorite(weather.currentWeather.city));
  };
  const addToFavorite = () => {
    dispatch(addFavorite(weather.currentWeather));
  };
  const classes = useStyles();
  return (
    <Card className={classes.wrapper}>
      <Box className={classes.box1}>
        <Button
          className={classes.btnFavorite}
          onClick={isFavorite ? deleteFromFavorite : addToFavorite}
        >
          {isFavorite ? "Remove" : "Add to Favorite"}
        </Button>
        <Typography component='div' variant="h4" className={classes.dayValue}>
          {dayNames[new Date(weather.currentWeather.day).getDay()]}
        </Typography>
        <Typography component='div' variant="h6" color="white">
          {monthsNames[new Date(weather.currentWeather.day).getMonth()]}
          {new Date(weather.currentWeather.day).getDate()}
        </Typography>
        <Typography component='div' variant="h7" color="white">
          {weather.currentWeather.city}
        </Typography>
      </Box>
      <Box className={classes.box2}>
        <Typography component='div'variant="h4" fontWeight="700" color="white">
          {weather.currentWeather.temperature}
          {` °C`}
        </Typography>
        <Typography component='div' variant="h4" color="white">
          {weather.currentWeather.description}
        </Typography>
      </Box>
    </Card>
  );
};

export default CurrentWeatherItem;
