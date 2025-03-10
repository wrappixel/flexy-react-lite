import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputMultiline = () => {
  return (
    <BaseCard title="Outlined Input Multiline">
      <TextField
        id="outlined-multiline-static"
        label="Multiline"
        multiline
        rows={4}
        defaultValue="Default Value"
        variant="outlined"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiOutlineInputMultiline;
