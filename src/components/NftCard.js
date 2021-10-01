import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NftSvg1, NftSvg1Sub } from "../assets";
import Label from "./Inputs/Label";

const NftCard = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.header}>
        <img src={NftSvg1} style={{ width: "100%" }} />

        <Box className={classes.circleImage}>
          <img src={NftSvg1Sub} style={{ width: "100%" }} />
        </Box>
        <Box className={classes.itemCount}>
          <Label
            text="20 Items"
            fontWeight={500}
            fontSize="1.8rem"
            lineHeight="2.7rem"
          />
        </Box>
      </Box>
      <Box padding="0 1.5rem">
        <Label
          text="Animated Pattern Art"
          fontWeight={600}
          fontSize="2.4rem"
          lineHeight="3.6rem"
        />
        <Label
          text="Animonkeys is a generative collection of 2500 tokens divided into 5 groups ...."
          fontSize="1.5rem"
          lineHeight="2.2rem"
        />
      </Box>
    </Box>
  );
};

export default NftCard;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#121522",
    borderRadius: 20,
    width: "40rem",
    height: "50rem",
    padding: "1rem",
  },

  header: {
    position: "relative",
    marginBottom: "6rem",
  },

  circleImage: {
    position: "absolute",
    height: "8rem",
    width: "8rem",
    borderRadius: 100,

    bottom: "-4rem",
    left: "2rem",
    overflow: "hidden",
    border: "1px solid #000",
  },

  itemCount: {
    position: "absolute",

    right: 0,
    bottom: "-3.7rem",
    background: "#010613",

    height: "4rem",
    width: "15rem",
    display: "flex",

    justifyContent: "center",

    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: ".8rem 0 .5rem 1rem",
  },
}));
