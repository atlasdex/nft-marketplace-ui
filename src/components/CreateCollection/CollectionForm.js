import { Box, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import InputWithLabel from "../Inputs/InputWithLabel";
import Label from "../Inputs/Label";
import {
  DiscordSvg,
  DribbleSvg,
  FlickrSvg,
  InstagramSvg,
  TelegramSvg,
  TwitterSvg,
} from "../../assets";
import LinkBox from "./LinkBox";
import Input from "../Inputs/Input";
import { GradientButton } from "../Buttons/GradientButton";
import Checkbox from "../Misc/Checkbox";

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

  const [explicitContent, showExplicitContent] = useState(false);

  const [telegramUrl, setTelegramUrl] = useState("");

  const [discordUrl, setDiscordUrl] = useState("");
  const [flickrUrl, setFlickrUrl] = useState("");

  const [instagramUrl, setInstagramUrl] = useState("");
  const [dribbleUrl, setDribbleUrl] = useState("");
  const [twitterUrl, setTwitterUrl] = useState("");

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
            <Input
              placeholder="Paste the Telegram Handle here..."
              value={telegramUrl}
              setValue={setTelegramUrl}
            />
          )}
          {activeLink === 2 && (
            <Input
              placeholder="Paste the Discord Handle here..."
              value={discordUrl}
              setValue={setDiscordUrl}
            />
          )}
          {activeLink === 3 && (
            <Input
              placeholder="Paste the Dribble Handle here..."
              value={dribbleUrl}
              setValue={setDribbleUrl}
            />
          )}
          {activeLink === 4 && (
            <Input
              placeholder="Paste the Twitter Handle here..."
              value={twitterUrl}
              setValue={setTwitterUrl}
            />
          )}
          {activeLink === 5 && (
            <Input
              placeholder="Paste the Instagram Handle here..."
              value={instagramUrl}
              setValue={setInstagramUrl}
            />
          )}
          {activeLink === 6 && (
            <Input
              placeholder="Paste the Flickr Handle here..."
              value={flickrUrl}
              setValue={setFlickrUrl}
            />
          )}
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
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
        <Box flex={1}></Box>
      </Box>
    </Box>
  );
};

export default CollectionForm;

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "5rem",
  },

  linkIconsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3.5rem",
  },
}));
