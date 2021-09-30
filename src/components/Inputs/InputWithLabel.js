import { Box, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import Input from "./Input";
import Label from "./Label";

const useStyles = makeStyles((theme) => ({
  container: {
    marginBottom: "2rem",
    width: ({ width }) => width,
    marginRight: ({ marginRight }) => marginRight,
    flex: 1,
  },
}));

const InputWithLabel = ({
  labelText,
  placeholder,
  marginRight,
  width,
  multiline,
  height,
  showTick = false,
  rightText,
  value,
  setValue,
}) => {
  const classes = useStyles({ marginRight, width });

  return (
    <Box className={classes.container}>
      <Label text={labelText} />
      <Input
        placeholder={placeholder}
        multiline={multiline}
        height={height}
        showTick={showTick}
        rightText={rightText}
        value={value}
        setValue={setValue}
      />
    </Box>
  );
};

export default InputWithLabel;
