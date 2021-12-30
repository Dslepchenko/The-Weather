import { TextField, Autocomplete } from "@mui/material";
import React, { useState, useEffect } from "react";
import {
  getLocation,
  getCurrentWeather,
  getFiveDayForecast,
} from "../../api/weather";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { setWeather, setDaysWeather, setLoading } from "../../store/slices/weather";
import {useGetLocationQuery, useGetCurrentWeatherQuery, useGetFiveDayForecastQuery} from '../../api/weatherApi';

const Input = () => {
  const dispatch = useDispatch();
  
  const [key, setKey] = useState('');
  const [value, setVal] = useState("");
  const setValue = _.debounce(setVal, 300)
  const {data:locations = []} = useGetLocationQuery(value);

  const {data:currentWeather} = useGetCurrentWeatherQuery(key.Key);
  const {data:fiveDaysForecast} = useGetFiveDayForecastQuery(key.Key);

  useEffect(() => {
    if(!currentWeather || !fiveDaysForecast || currentWeather.length === 0) {
      return
    }
    try { dispatch(
      setWeather({
        currentWeather: {
          city: key.LocalizedName,
          temperature: currentWeather[0].Temperature.Metric.Value,
          icon: currentWeather[0].WeatherIcon,
          day: currentWeather[0].LocalObservationDateTime,
          description: currentWeather[0].WeatherText,
          minTemp: fiveDaysForecast.DailyForecasts[0].Temperature.Minimum.Value,
          maxTemp: fiveDaysForecast.DailyForecasts[0].Temperature.Maximum.Value,
          dayTime: fiveDaysForecast.DailyForecasts[0].Day,
          nightTime: fiveDaysForecast.DailyForecasts[0].Night,
        },
      })
    );
    } catch (e) {
      console.error(e.message);
    }
    dispatch(
      setDaysWeather({
        days: fiveDaysForecast.DailyForecasts,
      })
    );
  },[currentWeather,fiveDaysForecast,dispatch,key.LocalizedName])

  const getWeather = (val) => {
    dispatch(setLoading('pending'));
    Promise.all([getCurrentWeather(val.Key), getFiveDayForecast(val.Key)]).then(
      (data) => {
        const current = data[0];
        const fiveDaysForecast = data[1];
        dispatch(
          setWeather({
            currentWeather: {
              city: val.LocalizedName,
              temperature: current.Temperature.Metric.Value,
              icon: current.WeatherIcon,
              day: current.LocalObservationDateTime,
              description: current.WeatherText,
              minTemp: fiveDaysForecast[0].Temperature.Minimum.Value,
              maxTemp: fiveDaysForecast[0].Temperature.Maximum.Value,
              dayTime: fiveDaysForecast[0].Day,
              nightTime: fiveDaysForecast[0].Night,
            },
          })
        );
        dispatch(
          setDaysWeather({
            days: fiveDaysForecast,
          })
        );
        dispatch(setLoading('success'))
      }
    ).catch(() => {
      dispatch(setLoading('failed'))
    })
  };

  return (
    <Autocomplete
      sx={{
        width: "400px",
        marginTop: "30px",
      }}
      options={locations}
      getOptionLabel={(option) => {
        return option.LocalizedName;
      }}
      renderOption={(props, option) => {
        return (
          <span
            onClick={() => {
              console.log(option);
            }}
            {...props}
            key={option.Key}
          >
            {option.LocalizedName},{option.Country.LocalizedName}
          </span>
        );
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="type a city"
          onChange={(e, val) => {
            setValue(e.target.value);
          }}
        />
      )}
      onChange={(e, val) => {
        if (!val) {
          return;
        }
        // getWeather(val);
        setKey(val)
      }}
    />
  );
};

export default Input;
