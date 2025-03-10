import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputSearch = () => {
  return (
    <BaseCard title="Default Search Input">
      <TextField
        id="standard-search"
        label="Search field"
        type="search"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiDefaultInputSearch;
