import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputReadOnly = () => {
  return (
    <BaseCard title="Filled Input Readonly">
      <TextField
        id="filled-read-only-input"
        label="Read Only"
        fullWidth
        defaultValue="Hello World"
        inputprops={{
          readOnly: true,
        }}
        variant="filled"
      />
    </BaseCard>
  );
};

export default FiFilledInputReadOnly;
