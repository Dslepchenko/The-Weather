import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  wrapper: {
    width: "90%",
    backgroundImage: "url(/mountain.jpg)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: "grid",
    gridTemplateRows: "50% 30%",
    gap: "20%",
    padding: "20px",
    borderRadius: "20px",
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
