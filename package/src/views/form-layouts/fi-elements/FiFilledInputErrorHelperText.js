import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputErrorHelperText = () => {
  return (
    <BaseCard title="Filled Input Error Helper Text">
      <TextField
        error
        id="filled-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="filled"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiFilledInputErrorHelperText;
