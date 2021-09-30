import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    padding: "0 10rem",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography>Landing</Typography>
    </Box>
  );
};

export default Landing;
