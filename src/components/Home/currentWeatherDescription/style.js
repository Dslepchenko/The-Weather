import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    boxWrapper:{
        marginTop:'40px',
            width:'100%',
    },
    boxItem:{
        display:'grid',
           gridTemplateColumns:'40% 40%',
           gap:'20%',
           color:'white',
          marginBottom:'15px',
           height:'20px',
           justifyContent:'space-between'
    },
    typografy:{
    justifySelf:'end'
    }

})