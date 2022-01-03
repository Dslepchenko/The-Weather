import { Paper, Box } from "@mui/material";
import { useStyles } from "../Input/style";
import React from "react";
import CurrentWeatherItem from "../Current_weather";
import CurrentWeatherDescription from "../Current_weather_description";
import Input from '../Input/Input';

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Input />
      <Box className={classes.box}>
        <CurrentWeatherItem />
        <CurrentWeatherDescription />
      </Box>
    </Paper>
  );
};

export default Home;
