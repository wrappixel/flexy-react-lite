import React from "react";

import {
  InputLabel,
  MenuItem,
  ListSubheader,
  FormControl,
  Select,
} from "@material-ui/core";

import BaseCard from "../../../components/BaseCard/BaseCard";

const FiFilledInputGrouping = () => {
  return (
    <BaseCard title="Filled Input Grouping">
      <FormControl fullWidth>
        <InputLabel htmlFor="grouped-select">Grouping</InputLabel>
        <Select defaultValue="" id="filled-grouped-select" variant="filled">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <ListSubheader>Category 1</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Category 2</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
    </BaseCard>
  );
};

export default FiFilledInputGrouping;
