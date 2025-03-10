import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlinedInputTime = () => {
  return (
    <BaseCard title="Outlined Input Time">
      <TextField
        id="outlined-time"
        label="Alarm clock"
        type="time"
        fullWidth
        defaultValue="07:30"
        variant="outlined"
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

export default FiOutlinedInputTime;
