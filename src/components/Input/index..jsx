import { TextField, Autocomplete } from "@mui/material";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setWeather,setDaysWeather} from "../../store/slices/weather";
import {defaultCurrentWeather} from '../../const'
import CircularIndeterminate from '../Spinner'
import {useGetLocationQuery, useGetCurrentWeatherQuery,useGetFiveDayForecastQuery} from "../../api/weatherApi";
import { useStyles } from "./style";

const Input = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [key, setKey] = useState(defaultCurrentWeather);
  const [value, setVal] = useState("");
  const setValue = _.debounce(setVal, 300);
  const { data: locations = [] } = useGetLocationQuery(value);
  const { data: currentWeather, isFetching: currentWeatherLoading } = useGetCurrentWeatherQuery(key.Key);
  const { data: fiveDaysForecast, isFetching: fiveDaysForecastLoading } = useGetFiveDayForecastQuery(key.Key);
  const isLoading = currentWeatherLoading || fiveDaysForecastLoading;

  useEffect(() => {
    if (!currentWeather || !fiveDaysForecast || currentWeather.length === 0) {
      return;
    }
    try {
      dispatch(
        setWeather({
          currentWeather: {
            city: key.LocalizedName,
            temperature: currentWeather[0].Temperature.Metric.Value,
            icon: currentWeather[0].WeatherIcon,
            day: currentWeather[0].LocalObservationDateTime,
            description: currentWeather[0].WeatherText,
            minTemp:fiveDaysForecast.DailyForecasts[0].Temperature.Minimum.Value,
            maxTemp:fiveDaysForecast.DailyForecasts[0].Temperature.Maximum.Value,
            dayTime: fiveDaysForecast.DailyForecasts[0].Day,
            nightTime: fiveDaysForecast.DailyForecasts[0].Night,
          },
        })
      );
    } catch (e) {
      console.error(e.message);
    }
    dispatch(
      setDaysWeather({days: fiveDaysForecast.DailyForecasts}));
  }, [currentWeather, fiveDaysForecast, dispatch, key.LocalizedName]);

  return (
    <>
    <Autocomplete
    className={classes.inputRoot}
      options={locations}

      getOptionLabel={(option) => {
        return option.LocalizedName;
      }}

      renderOption={(props, option) => {
        return (
          <span {...props} key={option.Key}>
            {option.LocalizedName},{option.Country.LocalizedName}
          </span>
        );
      }}
      
      renderInput={(params) => (
        <TextField
          {...params}
          onChange={(e, val) => {
            setValue(e.target.value);
          }}
        />
      )}
      
      onChange={(e, val) => {
        if (!val) {
          return;
        }
        setKey(val);
      }}
    />
    {isLoading && <CircularIndeterminate/>}
    </>
  );
};

export default Input;
