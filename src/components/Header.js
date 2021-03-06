import { Box, makeStyles, Typography, Button } from "@material-ui/core";

import { useWeb3React } from "@web3-react/core";
import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import { AtlasLogoSvg, SearchIconSvg } from "../assets";
import { conciseAddress } from "../utils/formatters";
import { GradientButton } from "./Buttons/GradientButton";
import Input from "./Inputs/Input";
import InputWithLabel from "./Inputs/InputWithLabel";
import SelectWalletModal from "./Modals/SelectWalletModal";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "5rem",
    width: "100%",
    background: "transparent",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5rem",
  },

  connectBtnText: {
    fontWeight: 600,
    fontSize: "1.4rem",
    lineHeight: "2.1rem",
    color: "#fff",
  },
  btnText: {
    fontWeight: 600,
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
    color: "#fff",
  },

  btn: {
    height: "5rem",
    width: "12rem",
    marginRight: "1rem",
  },
}));

const Header = () => {
  const web3context = useWeb3React();

  const classes = useStyles();

  const [searchValue, setSearchValue] = useState("");

  const [showModal, setShowModal] = useState(false);

  const walletData = useSelector((state) => state.web3.walletData);

  console.log("walletData Instance =<  ", walletData);

  return (
    <Box className={classes.container}>
      <img src={AtlasLogoSvg} />

      <Box display="flex" alignItems="center">
        <Input
          placeholder="Search Items Here"
          marginBottom={false}
          value={searchValue}
          setValue={setSearchValue}
          background="#171C27"
          border={false}
          InputAction={() => <img src={SearchIconSvg} />}
        />
        <Button className={classes.btn}>
          <Typography className={classes.btnText}>Market</Typography>
        </Button>
        <Button className={classes.btn}>
          <Typography className={classes.btnText}>Create</Typography>
        </Button>
        <Button className={classes.btn}>
          <Typography className={classes.btnText}>Profile</Typography>
        </Button>
        {walletData ? (
          <GradientButton
            height={50}
            width={170}
            // onClick={() => setShowModal(true)}
          >
            <Typography className={classes.connectBtnText}>
              {conciseAddress(walletData?.publicKey?.toBase58())}
            </Typography>
          </GradientButton>
        ) : (
          <GradientButton
            height={50}
            width={170}
            onClick={() => setShowModal(true)}
          >
            {walletData ? (
              <Typography className={classes.connectBtnText}>
                {conciseAddress(walletData.publicKey?.toBase58())}
              </Typography>
            ) : (
              <Typography className={classes.connectBtnText}>
                Connect Wallet
              </Typography>
            )}
          </GradientButton>
        )}
      </Box>
      <SelectWalletModal showModal={showModal} setShowModal={setShowModal} />
    </Box>
  );
};

export default Header;
