import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { WeatherData } from "../../../../../../types/weather/WeatherData";

type Props = {
  weather: WeatherData | null;
};

export default function TodayWeatherCard(props: Props) {
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
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography gutterBottom color="secondary.contrastText">
              {`${props.weather?.forecasts[0].dateLabel}：${props.weather?.forecasts[0].date}`}
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="secondary.contrastText"
            >
              📍{props.weather?.location.city}
            </Typography>
            <img
              src={props.weather?.forecasts[0].image.url}
              style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
            />
            <Typography variant="h5">
              {props.weather?.forecasts[0].telop}
            </Typography>
            <Typography variant="h6">
              最高{" "}
              {props.weather?.forecasts[0].temperature.max?.celsius || "N/A"} ℃
              / 最低{" "}
              {props.weather?.forecasts[0].temperature.min?.celsius || "N/A"} ℃
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
