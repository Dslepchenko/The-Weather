import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    card:{
        display:'grid',
            gridTemplateRows:'40% 20% 20% 20%',
            justifyItems:'center',
            alignItems:'center',
            height:'100%',
            width:'200px',
            marginTop:'20px',
            backgroundColor:'#272730',
            borderRadius:'20px',
            border:'0.5px solid white',
            justifySelf:'center'
    },
    btnRemove:{
        width:'100%',
        alignSelf:'end',
        borderRadius:'20px'
    }

})