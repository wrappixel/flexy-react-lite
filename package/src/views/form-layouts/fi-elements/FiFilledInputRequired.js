import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputRequired = () => {
  return (
    <BaseCard title="Filled Input Required">
      <TextField
        required
        id="filled-required"
        label="Required"
        fullWidth
        defaultValue="Hello World"
        variant="filled"
      />
    </BaseCard>
  );
};

export default FiFilledInputRequired;
