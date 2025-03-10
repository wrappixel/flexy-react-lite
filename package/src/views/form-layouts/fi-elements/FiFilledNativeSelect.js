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

const FiFilledNativeSelect = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <BaseCard title="Filled Native Select">
      <TextField
        id="filled-select-currency-native"
        select
        label="Native select"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
        variant="filled"
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

export default FiFilledNativeSelect;
