import React from "react";

import { Grid2 as Grid, Box } from "@mui/material";

import { ColorButtons } from "../../components/Forms/Button/ColorButtons";
import { SizeButton } from "../../components/Forms/Button/SizeButton";

import { OutlinedColorButtons } from "../../components/Forms/Button/OutlinedColorButtons";

import { TextColorButtons } from "../../components/Forms/Button/TextColorButtons";

import { IconColorButtons } from "../../components/Forms/Button/IconColorButtons";

import { FabDefaultButton } from "../../components/Forms/Button/FabDefaultButton";

import { DefaultButtonGroup } from "../../components/Forms/Button/DefaultButtonGroup";

const ExButton = () => {
  // 2

  return (
    <Box>
      <Grid container spacing={3}>
        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item size={{ xs: 12, lg: 6 }}

          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <ColorButtons />
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <SizeButton />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <OutlinedColorButtons />
        </Grid>

        {/* ------------------------- row 2 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <TextColorButtons />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <IconColorButtons />
        </Grid>
        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <FabDefaultButton />
        </Grid>

        {/* ------------------------- row 4 ------------------------- */}
        <Grid
          item
          size={{ xs: 12, lg: 6 }}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }}
        >
          <DefaultButtonGroup />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExButton;
