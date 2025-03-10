import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputDateTime = () => {
  return (
    <BaseCard title="Filled Date Time Input">
      <TextField
        id="filled-datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiFilledInputDateTime;
