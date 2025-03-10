import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputPassword = () => {
  return (
    <BaseCard title="Outlined Input Password">
      <TextField
        id="outlined-password-input"
        label="Password"
        fullWidth
        autoComplete="current-password"
        variant="outlined"
        type="password"
      />
    </BaseCard>
  );
};

export default FiOutlineInputPassword;
