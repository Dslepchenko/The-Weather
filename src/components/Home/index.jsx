import { Paper, Grid, Container } from "@mui/material";
import { useStyles } from "./style";
import React from "react";
import CurrentWeatherItem from "../Current_weather";
import CurrentWeatherDescription from "../Current_weather_description";
import Input from '../Input/index.';

const Home = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Input />

      <Container fixed> 
        <Grid container spacing={1} justifyContent='center'>
        <Grid item xs={12} md={4} lg={4}>
        <CurrentWeatherItem />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <CurrentWeatherDescription />
        </Grid>
        </Grid>
      </Container>
      
    </Paper>
  );
};

export default Home;
