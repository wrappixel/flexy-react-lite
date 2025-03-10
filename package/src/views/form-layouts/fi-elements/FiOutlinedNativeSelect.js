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

const FiOutlinedNativeSelect = () => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <BaseCard title="Outlined Native Select">
      <TextField
        id="outlined-select-currency-native"
        select
        label="Native select"
        value={currency}
        onChange={handleChange}
        SelectProps={{
          native: true,
        }}
        helperText="Please select your currency"
        variant="outlined"
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

export default FiOutlinedNativeSelect;
