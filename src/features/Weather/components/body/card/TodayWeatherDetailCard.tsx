import React from "react";
import { WeatherData } from "../../../../../types/weather/WeatherData";
import { Card, CardContent, Stack } from "@mui/material";
import TodayWeatherDetailItem from "./TodayWeatherDetailItem";

type Props = {
  weather: WeatherData | null;
};

export default function TodayWeatherDetailCard(props: Props) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          textAlign: "center",
        }}
      >
        <TodayWeatherDetailItem
          icon="🧭"
          index="風向き"
          detail={props.weather?.forecasts[0]?.detail?.wind ?? "データなし"}
        />

        <TodayWeatherDetailItem
          icon="🌊"
          index="波の高さ"
          detail={props.weather?.forecasts[0].detail.wave ?? "データなし"}
        />
      </Card>
    </>
  );
}
