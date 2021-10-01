import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Label from "../components/Inputs/Label";
import { GradientButton } from "../components/Buttons/GradientButton";
import NftCard from "../components/NftCard";

const MyCollections = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="5rem"
      >
        <Box>
          <Label
            text="My Collections"
            fontWeight={700}
            fontSize="4rem"
            lineHeight="4rem"
          />
          <Label
            text="Create, curate, and manage collections of unique NFTs to share and sell."
            fontSize="1.8rem"
            lineHeight="2.7rem"
            marginBottom={0}
          />
        </Box>
        <Box>
          <GradientButton className={classes.createCollectionBtn}>
            <Label
              text="Create Collection"
              fontWeight={600}
              fontSize="2.2rem"
              lineHeight="3.3rem"
              marginBottom={0}
            />
          </GradientButton>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between" marginBottom="5rem">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </Box>
      <Box display="flex" justifyContent="space-between">
        <NftCard />
        <NftCard />
        <NftCard />
        <NftCard />
      </Box>
    </Box>
  );
};

export default MyCollections;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
  },

  createCollectionBtn: {
    height: "6rem",
    width: "24rem",
  },
}));
