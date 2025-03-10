import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputReadOnly = () => {
  return (
    <BaseCard title="Outlined Input Readonly">
      <TextField
        id="outlined-read-only-input"
        label="Read Only"
        fullWidth
        defaultValue="Hello World"
        inputprops={{
          readOnly: true,
        }}
        variant="outlined"
      />
    </BaseCard>
  );
};

export default FiOutlineInputReadOnly;
