import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const Landing = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography>Landing</Typography>
    </Box>
  );
};

export default Landing;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
  },
}));
