import React from 'react';
import { useSelector } from 'react-redux';
import { Box, Grid} from '@mui/material';
import FavoriteItem from '../Favorite_weather_item';

const Favorite = () => {
    const favorites = useSelector((state)=>{
        return state.favorites.items
    })

    console.log(favorites);
    return (
        <Box sx={{maxWidth:'100%', height:'1100px', backgroundColor:'#313741'}}>
            <Grid container marginTop='50px' justifyContent='flex-start' >
            {favorites.map((item, i) => {
                return <Grid item textAlign='-webkit-center'marginBottom='20px'  maxHeight='350px' spacing={1} xs={6} md={3}><FavoriteItem 
                key={i}
                city={item.city} 
                temperature={item.temperature}
                icon={item.icon}/>
                </Grid>
            })}
</Grid>
        </Box>
    );
}

export default Favorite;
