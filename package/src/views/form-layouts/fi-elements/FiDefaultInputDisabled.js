import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputDisabled = () => {
  return (
    <BaseCard title="Default Disabled Input">
      <TextField id="standard-basic" label="Standard" disabled fullWidth />
    </BaseCard>
  );
};

export default FiDefaultInputDisabled;
