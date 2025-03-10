import React from "react";

import { TextField } from "@material-ui/core";

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

const FiDefaultNativeSelect = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <BaseCard title="Default Native Select">
      <TextField
        id="standard-select-currency-native"
        select
        label="Native select"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
        fullWidth
      >
        {currencies.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </TextField>
    </BaseCard>
  );
};

export default FiDefaultNativeSelect;
