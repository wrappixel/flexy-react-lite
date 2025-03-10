import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputError = () => {
  return (
    <BaseCard title="Outlined Input Error">
      <TextField
        error
        id="outlined-error"
        label="Error"
        defaultValue="Hello World"
        variant="outlined"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiOutlineInputError;
