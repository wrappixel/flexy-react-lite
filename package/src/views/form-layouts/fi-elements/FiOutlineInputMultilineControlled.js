import React from "react";

import { TextField } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiOutlineInputMultilineControlled = () => {
  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <BaseCard title="Outlined Input Multiline Controlled">
      <TextField
        id="outlined-multiline-flexible"
        label="Multiline"
        multiline
        rowsmax={4}
        value={value}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />
    </BaseCard>
  );
};

export default FiOutlineInputMultilineControlled;
