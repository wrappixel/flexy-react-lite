import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputTime = () => {
  return (
    <BaseCard title="Filled Input Time">
      <TextField
        id="filled-time"
        label="Alarm clock"
        type="time"
        fullWidth
        defaultValue="07:30"
        variant="filled"
        InputLabelProps={{
          shrink: true,
        }}
        inputprops={{
          step: 300, // 5 min
        }}
      />
    </BaseCard>
  );
};

export default FiFilledInputTime;
