import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputTime = () => {
  return (
    <BaseCard title="Default Time Input">
      <TextField
        id="time"
        label="Alarm clock"
        type="time"
        fullWidth
        defaultValue="07:30"
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

export default FiDefaultInputTime;
