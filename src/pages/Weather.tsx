import { Grid, Typography } from "@mui/material";
import React from "react";
import Search from "../features/Weather/Search";

export default function Weather() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          天気予報アプリ
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Search />
      </Grid>
    </Grid>
  );
}
