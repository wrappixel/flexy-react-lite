import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputNumber = () => {
  return (
    <BaseCard title="Default Number Input">
      <TextField
        id="standard-number"
        label="Number"
        type="number"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiDefaultInputNumber;
