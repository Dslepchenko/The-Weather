import { Card, Typography, Button, CardMedia } from '@mui/material';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteFavorite } from '../../store/slices/favorites';

const FavoriteItem = ({city,icon,temperature}) => {
    const weather = useSelector((state) => {
        return state.weather
      })
      const dispatch = useDispatch();
      const favorites = useSelector((state)=>{
        return state.favorites.items
    })
    const isFavorite = favorites.find((item) => {
      return item.city === weather.currentWeather.city
    })
    const deleteFromFavorite =() => {
      dispatch(deleteFavorite(city))
    }
      
    return (
        <Card sx={{
            display:'grid',
            gridTemplateRows:'40% 20% 20% 20%',
            justifyItems:'center',
            alignItems:'center',
            height:'80%',
            marginTop:'30px',
            width:'80%',
            backgroundColor:'#272730',
            borderRadius:'20px',
            border:'0.5px solid white'
        }}>
             <CardMedia component='img' sx={{
                width:'70%',
                height:'60%',
                
            }}
            src={`https://developer.accuweather.com/sites/default/files/${String(icon).padStart(2,'0')}-s.png`}/>
            <Typography variant='h6' sx={{
                color:'white',
            }}>
                {city}

            </Typography>
            <Typography variant='h3' sx={{
                color:'white',
            }}>
                {temperature}{` °C`}

            </Typography>
            <Button 
            onClick={deleteFromFavorite}
            sx={{
                width:'100%',
                
                alignSelf:'end',
                borderRadius:'20px'
            }}>
                Remove 
            </Button>
        </Card>
    );
}

export default FavoriteItem;
