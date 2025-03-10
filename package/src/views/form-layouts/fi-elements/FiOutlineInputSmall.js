import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputSmall = () => {
  return (
    <BaseCard title="Outlined Input Small">
      <TextField
        label="Size"
        id="outlined-size-small"
        defaultValue="Small"
        variant="outlined"
        size="small"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiOutlineInputSmall;
