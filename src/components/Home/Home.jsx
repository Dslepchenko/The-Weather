import { Paper, Box, TextField } from "@mui/material";
import { useStyles } from "./style";
import React from "react";
import CurrentWeatherItem from "./currentWeather/CurrentWeather";
import CurrentWeatherDescription from "./currentWeatherDescription/CurrentWeatherDescription";
import Input from "./Input";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

const Home = () => {

  const classes = useStyles();


  return (
    <Paper className={classes.paper}>
      <Input/>
      <Box className={classes.box}>
        <CurrentWeatherItem />
        <CurrentWeatherDescription />
      </Box>
    </Paper>
  );
};

export default Home;
