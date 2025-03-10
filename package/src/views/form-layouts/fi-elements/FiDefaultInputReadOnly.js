import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputReadOnly = () => {
  return (
    <BaseCard title="Default Input Readonly">
      <TextField
        id="standard-read-only-input"
        label="Read Only"
        defaultValue="Hello World"
        fullWidth
        inputprops={{
          readOnly: true,
        }}
      />
    </BaseCard>
  );
};

export default FiDefaultInputReadOnly;
