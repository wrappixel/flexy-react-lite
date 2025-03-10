import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlinedInputDateTime = () => {
  return (
    <BaseCard title="Outlined Input Date Time">
      <TextField
        id="outlined-datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        fullWidth
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
      />
    </BaseCard>
  );
};

export default FiOutlinedInputDateTime;
