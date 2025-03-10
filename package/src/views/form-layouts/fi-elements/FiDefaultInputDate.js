import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputDate = () => {
  return (
    <BaseCard title="Default Date Input">
      <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiDefaultInputDate;
