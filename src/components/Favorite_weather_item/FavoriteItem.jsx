import { Card, Typography, Button, CardMedia } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteFavorite } from "../../store/slices/favorites";
import { useStyles } from "./style";

const FavoriteItem = ({ city, icon, temperature }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const deleteFromFavorite = () => {
    dispatch(deleteFavorite(city));
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        component="img"
        width="70%"
        height="60%"
        src={`https://developer.accuweather.com/sites/default/files/${String(icon).padStart(2, "0")}-s.png`}
      />
      <Typography variant="h6" color="white">
        {city}
      </Typography>
      <Typography variant="h3" color="white">
        {temperature}
        {` °C`}
      </Typography>
      <Button className={classes.btnRemove} onClick={deleteFromFavorite}>
        Remove
      </Button>
    </Card>
  );
};

export default FavoriteItem;
