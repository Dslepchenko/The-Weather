import React from 'react';
import { useSelector } from 'react-redux';
import { Box} from '@mui/material';
import FavoriteItem from '../Favorite_weather_item/FavoriteItem';

const Favorite = () => {
    const favorites = useSelector((state)=>{
        return state.favorites.items
    })

    console.log(favorites);
    return (
        <Box sx={{
            width:'100%',
            height:'1000px',
            display:'grid',
            gridTemplateColumns:'20% 20% 20% 20% 20%',
            gridTemplateRows:'50% 50%',
            justifyItems:'center',
            backgroundColor:'#272730'
        }}>
            {favorites.map((item, i) => {
                return <FavoriteItem 
                key={i}
                city={item.city} 
                temperature={item.temperature}
                icon={item.icon}/>
            })}

        </Box>
    );
}

export default Favorite;
