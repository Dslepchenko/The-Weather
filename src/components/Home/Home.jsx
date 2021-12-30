import { Paper, Box, TextField } from "@mui/material";
import { useStyles } from "./style";
import React from "react";
import CurrentWeatherItem from "./currentWeather/CurrentWeather";
import CurrentWeatherDescription from "./currentWeatherDescription/CurrentWeatherDescription";
import Input from "./Input";
import { useSelector } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';

 function CircularIndeterminate() {
  return (
    <Box sx={{position:'fixed', display:'flex', alignItems:'center', justifyContent:'center', top:'0', right:'0', bottom:'0', left:'0'  }}>
      <CircularProgress color='success'/>
    </Box>
  );
}
const Home = () => {
  const loading = useSelector((state) =>{
    return state.weather.loading
  })
  const classes = useStyles();


  return (
    <Paper className={classes.paper}>
      <Input/>
      {loading === 'pending' && <CircularIndeterminate/>}
      <Box className={classes.box}>
        <CurrentWeatherItem />
        <CurrentWeatherDescription />
      </Box>
    </Paper>
  );
};

export default Home;
