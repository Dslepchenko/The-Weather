import React from "react";
import { Box, Typography } from "@mui/material";
import { useStyles } from "./style";

const CurrentWeatherDescriptionItem = ({minTemp,maxTemp,dayForecast,nightForecast,}) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.boxWrapper}>
      <Box className={classes.boxItem}>
        <Typography component='div' variant="h5">Min Temp</Typography>
        <Typography component='div' variant="h5" className={classes.typografy}>
          {minTemp}
          {` °C`}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography component='div' variant="h5">Max Temp</Typography>
        <Typography  component='div' variant="h5" className={classes.typografy}>
          {maxTemp}
          {` °C`}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography component='div' variant="h5">Day forecast</Typography>
        <Typography component='div' variant="h5" className={classes.typografy}>
          {dayForecast}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography component='div' variant="h5">Night forecast</Typography>
        <Typography component='div' variant="h5" className={classes.typografy}>
          {nightForecast}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeatherDescriptionItem;
