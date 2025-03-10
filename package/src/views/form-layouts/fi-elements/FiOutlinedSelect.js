import React from "react";

import { TextField, MenuItem } from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const FiOutlinedSelect = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <BaseCard title="Outlined Select">
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        value={currency}
        onChange={handleChange}
        helperText="Please select your currency"
        variant="outlined"
        fullWidth
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </BaseCard>
  );
};

export default FiOutlinedSelect;
