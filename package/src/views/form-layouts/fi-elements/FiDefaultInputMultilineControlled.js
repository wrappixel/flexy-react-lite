import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiDefaultInputMultilineControlled = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <BaseCard title="Default Multiline Controlled">
      <TextField
        id="standard-multiline-flexible"
        label="Multiline"
        multiline
        rowsmax={4}
        value={value}
        onChange={handleChange}
        fullWidth
      />
    </BaseCard>
  );
};

export default FiDefaultInputMultilineControlled;
