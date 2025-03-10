import React from "react";
import { Grid2 as Grid, Box } from "@mui/material";

import { ComboBoxAutocomplete } from "../../components/Forms/AutoComplete/ComboBoxAutocomplete";

import { MultipleValuesAutocomplete } from "../../components/Forms/AutoComplete/MultipleValuesAutocomplete";
import { CheckboxesAutocomplete } from "../../components/Forms/AutoComplete/CheckboxesAutocomplete";
import { SizesAutocomplete } from "../../components/Forms/AutoComplete/SizesAutocomplete";

const ExAutoComplete = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={3}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid
          item size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <ComboBoxAutocomplete />
        </Grid>

        {/* ------------------------- row 5 ------------------------- */}
        <Grid
          item size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <MultipleValuesAutocomplete />
        </Grid>

        {/* ------------------------- row 6 ------------------------- */}
        <Grid
          item size={{ xs: 12, lg: 4, sm: 6 }}

          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <CheckboxesAutocomplete />
        </Grid>
        {/* ------------------------- row 7 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 4, sm: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <SizesAutocomplete />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExAutoComplete;
