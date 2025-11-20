import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { WeatherData } from "../../../../../../types/weather/WeatherData";
import OtherdayWeatherDetailItem from "./OtherdayWeatherDetailItem";

type Props = {
  weather: WeatherData | null;
};

export default function OtherdayWeatherCard(props: Props) {
  return (
    <>
      <Card>
        <CardContent>
          <Stack>
            <Typography variant="h5">明日・明後日の天気</Typography>
            <Box
              display="flex" // flexコンテナにする
              flexDirection="row" // 子要素を横並びにする（rowはデフォルト）
              justifyContent="space-between" // 横方向のスペースを均等に
              alignItems="center" // 縦方向の中央揃え
              p={2} // パディング
            >
              <OtherdayWeatherDetailItem
                dateLabel={props.weather?.forecasts[1]?.dateLabel || "N/A"}
                date={props.weather?.forecasts[1]?.date || "N/A"}
                imageUrl={props.weather?.forecasts[1]?.image?.url || "N/A"}
                maxTemperature={
                  props.weather?.forecasts[1]?.temperature?.max?.celsius ||
                  "N/A"
                }
                minTemperature={
                  props.weather?.forecasts[1]?.temperature?.min?.celsius ||
                  "N/A"
                }
              />
              <OtherdayWeatherDetailItem
                dateLabel={props.weather?.forecasts[2]?.dateLabel || "N/A"}
                date={props.weather?.forecasts[2]?.date || "N/A"}
                imageUrl={props.weather?.forecasts[2]?.image?.url || "N/A"}
                maxTemperature={
                  props.weather?.forecasts[2]?.temperature?.max?.celsius ||
                  "N/A"
                }
                minTemperature={
                  props.weather?.forecasts[2]?.temperature?.min?.celsius ||
                  "N/A"
                }
              />
            </Box>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
