import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { WeatherData } from "../../../../types/weather/WeatherData";
import TodayWeatherCard from "./card/today/TodayWeatherCard";
import TodayWeatherDetailCard from "./card/today/TodayWeatherDetailCard";
import OtherdayWeatherCard from "./card/otherday/OtherdayWeatherCard";

type Props = {
  weather: WeatherData | null;
};

export default function WeaherAppBody(props: Props) {
  return (
    <>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TodayWeatherCard weather={props.weather} />
          </Grid>
          <Grid item xs={4}>
            <TodayWeatherDetailCard weather={props.weather} />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ my: 3 }}>
        <OtherdayWeatherCard weather={props.weather} />
      </Box>
    </>
  );
}
