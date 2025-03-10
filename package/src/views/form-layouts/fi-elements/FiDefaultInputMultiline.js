import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputMultiline = () => {
  return (
    <BaseCard title="Default Multiline">
      <TextField
        id="standard-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiDefaultInputMultiline;
