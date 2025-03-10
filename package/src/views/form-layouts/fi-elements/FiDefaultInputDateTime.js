import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputDateTime = () => {
  return (
    <BaseCard title="Default Date Time Input">
      <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiDefaultInputDateTime;
