import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import CollectionForm from "../components/CollectionForm";

const CreateNewCollection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.heading}>Create New Collection</Typography>

      <Box className={classes.containerContent}>
        <Box className={classes.containerContentUpper}>
          <Box className={classes.uploadLogoBox}>
            <Typography className={classes.uploadLogoBoxHeading}>
              Upload Logo
            </Typography>
            <Box className={classes.uploadLogoBoxBottom}>
              <Box className={classes.uploadLogoBoxPicker}></Box>
              <Box className={classes.uploadLogoBoxTextContainer}>
                <Typography className={classes.uploadLogoBoxText}>
                  Drag & Drop file or Browse file from your computer
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={classes.uploadImageBox}>
            <Box>
              <Typography className={classes.uploadImageBoxHeading}>
                Upload Featured Image
              </Typography>
              <Box className={classes.uploadImageBoxTextContainer}>
                <Typography className={classes.uploadImageBoxText}>
                  This image will be used for featuring your collection on the
                  homepage, category pages, or other promotional areas of
                  OpenSea. 600 x 400 recommended.
                </Typography>
              </Box>
            </Box>
            <Box className={classes.uploadImageBoxBottom}>
              <Box className={classes.uploadImageBoxPicker}></Box>
            </Box>
          </Box>
        </Box>{" "}
        <Box className={classes.uploadImageBox} marginBottom="6rem">
          <Box>
            <Typography className={classes.uploadImageBoxHeading}>
              Banner Image
            </Typography>
            <Box className={classes.uploadImageBoxTextContainer}>
              <Typography className={classes.uploadImageBoxText}>
                This image will appear at the top of your collection page. Avoid
                including too much text in this banner image, as the dimensions
                change on different devices. 1400 x 400 recommended.
              </Typography>
            </Box>
          </Box>
          <Box className={classes.uploadImageBoxBottom}>
            <Box
              className={classes.uploadImageBoxPicker}
              style={{ width: "70rem" }}
            ></Box>
          </Box>
        </Box>
        <CollectionForm />
      </Box>
    </Box>
  );
};

export default CreateNewCollection;
const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
    // height: "100%",
  },
  heading: {
    fontWeight: 700,
    fontSize: "4rem",
    lineHeight: "8rem",
    color: "#fff",
    marginBottom: "3rem",
  },

  containerContent: {
    // height: "140rem",
    // width: "160rem",
    background: "rgba(18, 21, 34, .5)",
    // opacity: 0.5,
    borderRadius: 10,
    padding: "5rem 8rem",

    [theme.breakpoints.down("1500")]: {
      padding: "4rem 5rem",
    },

    [theme.breakpoints.down("1100")]: {
      padding: "4rem",
    },
  },

  containerContentUpper: {
    display: "flex",

    marginBottom: "2.4rem",
  },

  uploadLogoBox: {
    background: "#121522",
    borderRadius: 10,
    flex: 2,
    height: "25rem",
    padding: "2rem",
    marginRight: "2rem",
  },
  uploadLogoBoxHeading: {
    fontWeight: 500,
    fontSize: "2.4rem",
    lineHeight: "3.6rem",
    color: "#fff",
    marginBottom: "3rem",
  },

  uploadLogoBoxBottom: {
    display: "flex",

    alignItems: "center",
  },

  uploadLogoBoxPicker: {
    height: "12rem",
    width: "12rem",
    borderRadius: 100,
    border: "1px dashed #fff",
  },
  uploadLogoBoxTextContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  uploadLogoBoxText: {
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "#8E8E8E",
    textAlign: "center",
    maxWidth: "25rem",
  },
  uploadImageBox: {
    background: "#121522",
    borderRadius: 10,
    flex: 3,
    height: "25rem",
    padding: "2rem",
    display: "flex",
    // alignItems: "center",
    justifyContent: "space-between",
  },

  uploadImageBoxHeading: {
    fontWeight: 500,
    fontSize: "2.4rem",
    lineHeight: "3.6rem",
    color: "#fff",
    marginBottom: "3rem",
  },

  uploadImageBoxBottom: {
    display: "flex",

    alignItems: "center",
  },

  uploadImageBoxPicker: {
    height: "18rem",
    width: "25rem",
    borderRadius: 10,
    border: "1px dashed #fff",
  },
  uploadImageBoxTextContainer: {},
  uploadImageBoxText: {
    fontWeight: 400,
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "#8E8E8E",

    maxWidth: "40rem",
  },
}));
