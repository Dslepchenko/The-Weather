import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    boxWrapper:{
        marginTop:'40px',
            width:'100%',
            justifySelf:'center',
            '@media (max-width: 1100px)' : {
                width: '90%',
                justifySelf:'center',
              },
              '@media (max-width: 768px)' : {
                width: '90%',
                minHeight:'70%',
                marginTop:'5px'
              }
    },
    boxItem:{
        display:'grid',
           gridTemplateColumns:'30% 60%',
           gap:'5px',
           color:'white',
          marginBottom:'15px',
           height:'20px',
           justifyContent:'space-between'
    },
    typografy:{
    justifySelf:'end'
    }

})