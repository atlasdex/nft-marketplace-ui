import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { ChooseImage90x90, NftImageSvg } from "../assets";
import { BorderGradientButton } from "../components/Buttons/BorderGradientButton";
import { GradientButton } from "../components/Buttons/GradientButton";
import GutterVertical from "../components/GutterVertical";
import InputWithLabel from "../components/Inputs/InputWithLabel";
import Label from "../components/Inputs/Label";
import Checkbox from "../components/Misc/Checkbox";
import PriceRatioBox from "../components/Misc/PriceRatioBox";
import Tabs from "../components/Misc/Tabs";
import { Close } from "@material-ui/icons";
import CollectionsDropdown from "../components/Dropdowns/CollectionsDropdown";

import { uploadFileAndGetLink } from "../redux/actions/web3Actions";

const CreateNft = () => {
  const classes = useStyles();

  const [nftName, setNftName] = useState("");

  const [description, setDescription] = useState("");

  const [externalLink, setExternalLink] = useState("");

  const [collectionName, setCollectionName] = useState("");

  const [explicitContent, showExplicitContent] = useState(false);

  const [putOnMarketPlace, setPutOnMarketPlace] = useState(false);

  const [previewImageSource, setPreviewImageSource] = useState(null);

  const [collectionValue, setCollectionValue] = useState("");

  const onFileChangeHandler = async (e) => {
    if (e.target.files[0]) {
      console.log("onFileChangeHandler => ", e.target.files[0]);

      // setImage(e.target.files[0]);

      previewFile(e.target.files[0]);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImageSource(reader.result);
    };
  };

  const handleChange = async (value) => {
    setCollectionValue(value);
  };

  return (
    <Box className={classes.container}>
      <Label
        text="Create New NFT"
        fontWeight={700}
        fontSize="4rem"
        lineHeight="8rem"
        marginBottom="3rem"
      />

      <Box className={classes.containerContent}>
        <Box display="flex">
          <Box flex={1}>
            <InputWithLabel
              labelText="Name"
              placeholder="Item Name"
              value={nftName}
              setValue={setNftName}
              marginBottom="5rem"
            />

            <InputWithLabel
              labelText="Description"
              placeholder="Description of your item"
              height="17.5rem"
              value={description}
              setValue={setDescription}
              marginBottom="5rem"
            />
          </Box>
          <GutterVertical />

          <Box flex={1}>
            <Label text="Upload File" />
            <Box className={classes.fileBox}>
              {previewImageSource ? (
                <>
                  <Box
                    className={classes.removeIcon}
                    onClick={() => setPreviewImageSource(null)}
                  >
                    <Close style={{ color: "#fff", fontSize: "3rem" }} />
                  </Box>
                  <img src={previewImageSource} style={{ height: "90%" }} />
                </>
              ) : (
                <>
                  <Label
                    text="Jpg, Png, Gif, Svg, Webm. Max 100mb."
                    fontSize="2rem"
                    lineHeight="3rem"
                    color="rgba(255,255,255,0.5)"
                    marginBottom="4rem"
                  />
                  <input
                    type="file"
                    onChange={onFileChangeHandler}
                    id="upload"
                    hidden
                  />
                  <label htmlFor="upload" className={classes.uploadInput}>
                    <img
                      src={ChooseImage90x90}
                      style={{ marginBottom: "3rem" }}
                    />
                  </label>

                  <Label
                    text="Drag and Drop File"
                    fontSize="1.4rem"
                    lineHeight="2.1rem"
                    fontWeight={500}
                    marginBottom={"5px"}
                  />
                  <Box display="flex" alignItems="center">
                    <Label
                      text="or "
                      fontSize="1.4rem"
                      lineHeight="2.1rem"
                      fontWeight={500}
                      color="rgba(255, 255, 255, 0.5)"
                      marginRight="5px"
                    />
                    <Label
                      text="browse media "
                      fontSize="1.4rem"
                      lineHeight="2.1rem"
                      fontWeight={500}
                      marginRight="5px"
                    />{" "}
                    <Label
                      text="on your device"
                      fontSize="1.4rem"
                      lineHeight="2.1rem"
                      fontWeight={500}
                      color="rgba(255, 255, 255, 0.5)"
                    />
                  </Box>
                </>
              )}

              {/* <img src={NftImageSvg} style={{ height: "20rem" }} /> */}
            </Box>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" marginBottom="5rem">
          <InputWithLabel
            labelText="External Link"
            placeholder="https://yoursite.com/item/itemId"
            value={externalLink}
            setValue={setExternalLink}
          />{" "}
          <GutterVertical />
          {/* <InputWithLabel
            labelText="Collection"
            placeholder="Select collection from the available list"
            value={collectionName}
            setValue={setCollectionName}
          /> */}
          <Box flex={1}>
            <Label text="Collection" fontSize="2.4rem" lineHeight="3.6rem" />{" "}
            <CollectionsDropdown
              handleChange={handleChange}
              options={["Collection 1", "Collection 2", "Collection 3"]}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" marginBottom="10rem">
          <Box
            flex={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            marginRight="4rem"
          >
            <Box>
              <Label text="Explicit & sensitive content" />
              <Label
                text="Set this collection as explicit and sensitive content"
                fontSize="1.6rem"
                lineHeight="2.6rem"
                fontWeight={400}
                color="rgba(255,255,255,.5)"
                marginBottom={0}
              />
            </Box>
            <Checkbox
              checked={explicitContent}
              setChecked={() => showExplicitContent((val) => !val)}
            />
          </Box>
          <Box
            flex={1}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Label text="Put on Marketplace" />
              <Label
                text="You can add item on marketplace anytime"
                fontSize="1.6rem"
                lineHeight="2.6rem"
                fontWeight={400}
                color="rgba(255,255,255,.5)"
                marginBottom={0}
              />
            </Box>
            <Checkbox
              checked={putOnMarketPlace}
              setChecked={() => setPutOnMarketPlace((val) => !val)}
            />
          </Box>
        </Box>
        {putOnMarketPlace && <PriceRatioBox />}
        <Box display="flex" justifyContent="center">
          <GradientButton
            className={classes.createBtn}
            onClick={() => uploadFileAndGetLink()}
          >
            <Label
              text="Create"
              marginBottom={0}
              fontSize={"2.2rem"}
              lineHeight="3.3rem"
              fontWeight={600}
            />
          </GradientButton>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNft;

const useStyles = makeStyles((theme) => ({
  container: {
    background: "#000",
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

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  fileBox: {
    border: "1px dotted #fff",
    height: "33rem",
    borderRadius: 10,

    display: "flex",
    padding: "1.5rem",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    position: "relative",
  },
  createBtn: {
    width: "25rem",
    height: "6rem",
  },

  changeBtn: {
    width: "11rem",
    height: "3.2rem",
    alignSelf: "flex-end",
  },

  priceRatioBox: {
    width: "100%",
    height: "75rem",
    background: "#121522",
    borderRadius: 20,
    marginBottom: "5rem",
    alignSelf: "center",
    padding: "4rem",
    justifyContent: "center",
    display: "flex",
  },

  uploadInput: {
    cursor: "pointer",
  },
  removeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    cursor: "pointer",
  },
}));
