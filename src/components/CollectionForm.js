import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputWithLabel from "./Inputs/InputWithLabel";
import Label from "../components/Inputs/Label";
import {
  DiscordSvg,
  DribbleSvg,
  FlickrSvg,
  InstagramSvg,
  TelegramSvg,
  TwitterSvg,
} from "../assets";
import LinkBox from "./CreateCollection/LinkBox";
import Input from "./Inputs/Input";
import { GradientButton } from "./Buttons/GradientButton";

const useStyles = makeStyles((theme) => ({
  container: {},

  linkIconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3.5rem",
  },

  createBtn: {
    width: "25rem",
    height: "6rem",
  },
}));

const linksArray = [
  TelegramSvg,
  DiscordSvg,
  DribbleSvg,
  TwitterSvg,
  InstagramSvg,
  FlickrSvg,
];

const CollectionForm = () => {
  const classes = useStyles();

  const [collectionName, setCollectionName] = useState("");

  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const [activeLink, setActiveLink] = useState(1);

  return (
    <Box className={classes.container}>
      <Box display="flex" alignItems="center" marginBottom="5rem">
        <InputWithLabel
          labelText="Name"
          placeholder="Collection Name"
          marginRight="4rem"
          value={collectionName}
          setValue={setCollectionName}
        />
        <InputWithLabel
          labelText="Make your URL"
          placeholder="https://atlasdex.finance/mycollection"
          value={url}
          setValue={setUrl}
        />
      </Box>
      <Box display="flex" marginBottom="5rem">
        <InputWithLabel
          labelText="Description"
          placeholder="Description of the collection"
          marginRight="4rem"
          height="16rem"
          value={description}
          setValue={setDescription}
        />
        <Box flex={1}>
          <Label text="Add Links" />

          <Box className={classes.linkIconsContainer}>
            {linksArray.map((item, index) => (
              <LinkBox
                icon={item}
                onClick={() => setActiveLink(index + 1)}
                active={activeLink === index + 1}
              />
            ))}
          </Box>
          {activeLink === 1 && (
            <Input placeholder="Paste the Telegram Handle here..." />
          )}
          {activeLink === 2 && (
            <Input placeholder="Paste the Discord Handle here..." />
          )}
          {activeLink === 3 && (
            <Input placeholder="Paste the Dribble Handle here..." />
          )}
          {activeLink === 4 && (
            <Input placeholder="Paste the Twitter Handle here..." />
          )}
          {activeLink === 5 && (
            <Input placeholder="Paste the Instagram Handle here..." />
          )}
          {activeLink === 6 && (
            <Input placeholder="Paste the Flickr Handle here..." />
          )}
        </Box>
      </Box>

      <Box>
        <Box>
          <Label text="Explicit & sensitive content" />
          <Label
            text="Set this collection as explicit and sensitive content"
            fontSize="1.6rem"
            lineHeight="2.6rem"
            fontWeight={400}
            color="rgba(255,255,255,.5)"
          />
        </Box>
      </Box>

      <Box>
        <GradientButton className={classes.createBtn}>Create</GradientButton>
      </Box>
    </Box>
  );
};

export default CollectionForm;
