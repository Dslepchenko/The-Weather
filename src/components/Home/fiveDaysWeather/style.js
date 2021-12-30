import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
   boxWrapper:{
    backgroundColor:'#272730',
    borderRadius:'20px',
    width:'100%',
    height:'80%',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    gridTemplateColumns:'18% 18% 18% 18% 18%',
    gap:'2%',
   },
   card:{
    backgroundColor:'#272730',
    borderRadius:'20px',
    width:'100%',
    height:'100%',
    justifyItems:'center',
    alignItems:'center',
    display:'grid',
    gridTemplateRows:'40% 30% 30%',
    border:'none',
    boxShadow:'none'
   }

})