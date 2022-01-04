import React from "react";
import { Typography, Button, Grid} from "@mui/material";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, deleteFavorite } from "../../store/slices/favorites";
import { dayNames, monthsNames } from '../../const';

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
    <Grid  className={classes.wrapper} flexGrow={1} container justifyContent='center' >

      <Grid item xs={12} alignSelf='end'>
        <Button
          className={classes.btnFavorite}
          onClick={isFavorite ? deleteFromFavorite : addToFavorite}
        >
          {isFavorite ? "Remove" : "Add to Favorite"}
        </Button>
        </Grid>

        <Grid  item xs={12} marginLeft='20px' alignSelf='end'>
        <Typography component='div' variant="h4" className={classes.dayValue}>
          {dayNames[new Date(weather.currentWeather.day).getDay()]}
        </Typography>
        </Grid>

        <Grid item xs={12} marginLeft='20px' alignSelf='normal'>
        <Typography component='div' variant="h6" color="white">
          {monthsNames[new Date(weather.currentWeather.day).getMonth()]}
          {new Date(weather.currentWeather.day).getDate()}
        </Typography>
        </Grid>

        <Grid item xs={12} marginLeft='20px'alignSelf='normal' >
        <Typography component='div' variant="h5" color="white">
          {weather.currentWeather.city}
        </Typography>
        </Grid>

        <Grid item xs={12} marginLeft='20px' alignSelf='end'>
        <Typography component='div'variant="h4" fontWeight="700" color="white">
          {weather.currentWeather.temperature}
          {` °C`}
        </Typography>
        </Grid>
        
        <Grid item xs={12} marginLeft='20px'>
        <Typography component='div' variant="h4" color="white">
          {weather.currentWeather.description}
        </Typography>
        </Grid>
   
   
    </Grid>
  );
};

export default CurrentWeatherItem;
