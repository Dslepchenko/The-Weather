import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    paper:{
        backgroundColor: "#313741",
        width: "100%",
        minHeight: "600px",
        display: "grid",
        gridTemplateRows:'20% 80%',
        justifyItems:'center',
       '@media (max-width: 768px)' : {
        gridTemplateRows:'10% 90%',
        minHeight: "1400px",
        backgroundColor: "#313741",
      }
    },
    
    box:{
        width: "70%",
        backgroundColor: "#232329",
        height: "470px",
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: "35% 61%",
        gap:'10px',
        '@media (max-width: 1100px)' : {
            width: '80%',
            gridTemplateColumns: "33% 66%",
            gap:'10px',
            minHeight:'400px'
          },
          '@media (max-width: 768px)' : {
            width: '90%',
            gridTemplateColumns:'100%',
            gap:'10px',
            minHeight:'70%'
          }
    },
    inputRoot: {
        border: "1px solid white",
        backgroundColor:'white',
        height:'55px',
        boxSizing:'border-box'
      }
})
   