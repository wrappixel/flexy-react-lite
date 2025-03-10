import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputMultilineControlled = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <BaseCard title="Filled Multiline Controlled">
      <TextField
        id="filled-multiline-flexible"
        label="Multiline"
        multiline
        rowsmax={4}
        value={value}
        onChange={handleChange}
        variant="filled"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiFilledInputMultilineControlled;
