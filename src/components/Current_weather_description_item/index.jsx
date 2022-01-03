import React from "react";
import { Box, Typography} from "@mui/material";
import { useStyles } from "./style";

const CurrentWeatherDescriptionItem = ({minTemp,maxTemp,dayForecast,nightForecast,}) => {
  const classes = useStyles();
  
  return (
    <Box className={classes.boxWrapper}>
      <Box className={classes.boxItem}>
        <Typography sx={{'@media (max-width: 1100px)':{fontVariant:'h7'} }} component='div' variant="h6">Min Temp</Typography>
        <Typography component='div' variant="h6" className={classes.typografy}>
          {minTemp}
          {` °C`}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography component='div' variant="h6">Max Temp</Typography>
        <Typography  component='div' variant="h6" className={classes.typografy}>
          {maxTemp}
          {` °C`}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography sx={{'@media (max-width: 1100px)':{fontVariant:'h7'} }} component='div' variant="h7">Day forecast</Typography>
        <Typography sx={{'@media (max-width: 1100px)':{fontVariant:'h7'} }} component='div' variant="h7" className={classes.typografy}>
          {dayForecast}
        </Typography>
      </Box>
      <Box className={classes.boxItem}>
        <Typography sx={{'@media (max-width: 1100px)':{fontVariant:'h7'} }} component='div' variant="h7">Night forecast</Typography>
        <Typography sx={{'@media (max-width: 1100px)':{fontVariant:'h7'} }} component='div' variant="h7" className={classes.typografy}>
          {nightForecast}
        </Typography>
      </Box>
    </Box>
  );
};

export default CurrentWeatherDescriptionItem;
