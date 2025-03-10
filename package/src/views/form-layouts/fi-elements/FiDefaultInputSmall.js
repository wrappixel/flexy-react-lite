import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputSmall = () => {
  return (
    <BaseCard title="Default Small Input">
      <TextField
        label="Size"
        id="standard-size-small"
        defaultValue="Small"
        size="small"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiDefaultInputSmall;
