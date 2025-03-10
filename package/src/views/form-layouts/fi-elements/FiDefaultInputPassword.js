import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputPassword = () => {
  return (
    <BaseCard title="Default Password Input">
      <TextField
        id="standard-password-input"
        label="Password"
        fullWidth
        autoComplete="current-password"
        type="password"
      />
    </BaseCard>
  );
};

export default FiDefaultInputPassword;
