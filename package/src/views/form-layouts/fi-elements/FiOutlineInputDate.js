import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputDate = () => {
  return (
    <BaseCard title="Outlined Input Date">
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        variant="outlined"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiOutlineInputDate;
