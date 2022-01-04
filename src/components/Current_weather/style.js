import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    backgroundImage: "url(/mountain.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    borderRadius: "20px",
    minHeight:'400px'
  },
  box1: {
    display: "grid",
    justifyItems: "start",
    gridTemplateRows: "10% 40% 20% 20%",
  },
  btnFavorite: {
    height: "20px",
    backgroundColor: "inherit",
    color: "white",
    maxWidth: "90%",
    border: "0.05px solid white",
    marginLeft:'20px',
    alignSelf:'flex-end'
  },
  dayValue: {
    color: "white",
    alignSelf: "end",
    fontWeight: "700",
  },
  box2: {
    display: "grid",
    alignSelf: "center",
    justifySelf: "start",
  },
});
