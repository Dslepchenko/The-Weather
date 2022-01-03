import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
   boxWrapper:{
    backgroundColor:'#272730',
    borderRadius:'20px',
    width:'100%',
    height:'90%',
    justifyContent:'space-around',
    display:'grid',
    gridTemplateColumns:'18% 18% 18% 18% 18%',
    gap:'2%',
    '@media (max-width: 1100px)' : {
      width:'95%',
      height:'80%',
      justifySelf:'center',
      alignSelf:'center',
      gap:'10px',
    },
    '@media (max-width: 768px)' : {
      width:'90%',
      height:'100%',
      justifySelf:'center',
      alignSelf:'center',
      gap:'10px',
    }
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