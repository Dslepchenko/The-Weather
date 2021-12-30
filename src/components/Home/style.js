import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    paper:{
        backgroundColor: "#313741",
        width: "100%",
        height: "670px",
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
        gap:'3%'
    }
})
   