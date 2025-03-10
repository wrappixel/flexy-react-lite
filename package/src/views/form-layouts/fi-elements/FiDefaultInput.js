import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInput = () => {
  return (
    <BaseCard title="Default Inputs">
      <TextField id="standard-basic" label="Standard" fullWidth />
    </BaseCard>
  );
};

export default FiDefaultInput;
