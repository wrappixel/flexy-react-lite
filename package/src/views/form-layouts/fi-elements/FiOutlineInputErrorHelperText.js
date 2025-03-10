import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputErrorHelperText = () => {
  return (
    <BaseCard title="Outlined Input Error Helper Text">
      <TextField
        error
        id="outlined-error-helper-text"
        label="Error"
        defaultValue="Hello World"
        helperText="Incorrect entry."
        variant="outlined"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiOutlineInputErrorHelperText;
