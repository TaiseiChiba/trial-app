import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import SearchWeather from "../features/Weather/SearchWeather";

export default function Weather() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom>
          🌤️ Weather App
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SearchWeather />
      </Grid>
    </Grid>
  );
}
