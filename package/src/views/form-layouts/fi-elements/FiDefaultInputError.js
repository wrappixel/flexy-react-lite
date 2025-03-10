import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputError = () => {
  return (
    <BaseCard title="Default Input Error">
      <TextField
        error
        id="standard-error"
        label="Error"
        fullWidth
        defaultValue="Hello World"
      />
    </BaseCard>
  );
};

export default FiDefaultInputError;
