import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputRequired = () => {
  return (
    <BaseCard title="Outlined Input Required">
      <TextField
        required
        id="outlined-required"
        label="Required"
        fullWidth
        defaultValue="Hello World"
        variant="outlined"
      />
    </BaseCard>
  );
};

export default FiOutlineInputRequired;
