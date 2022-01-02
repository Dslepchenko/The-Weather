import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    paper:{
        backgroundColor: "#313741",
        width: "100%",
        minHeight: "670px",
        display: "grid",
        gridTemplateRows:'20% 80%',
       justifyItems:'center'
    },
    box:{
        width: "70%",
        backgroundColor: "#232329",
        minHeight: "400px",
        height: "450px",
        borderRadius: "20px",
        display: "grid",
        gridTemplateColumns: "37% 57%",
        gap:'3%',
        '@media (max-width: 1100px)' : {
            width: '80%',
            gridTemplateColumns:'100%',
            gridTemplateRows:'50% 50%',
            minHeight:'1000px'
          }
    },
    inputRoot: {
        border: "1px solid white",
        backgroundColor:'white',
        height:'55px',
        boxSizing:'border-box'
      }
})
   