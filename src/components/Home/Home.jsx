import { Paper, Box } from "@mui/material";
import { useStyles } from "./style";
import React from "react";
import CurrentWeatherItem from "./currentWeather/CurrentWeather";
import CurrentWeatherDescription from "./currentWeatherDescription/CurrentWeatherDescription";
import Input from "./Input";

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
