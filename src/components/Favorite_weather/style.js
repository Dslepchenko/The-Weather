import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    card:{
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
    },
    btnRemove:{
        width:'100%',
                
                alignSelf:'end',
                borderRadius:'20px'
    }

})