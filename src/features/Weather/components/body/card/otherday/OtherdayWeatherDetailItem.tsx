import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import { WeatherData } from "../../../../../../types/weather/WeatherData";

type Props = {
  dateLabel: string; // 明日or明後日
  date: string; // 日付
  imageUrl: string; // イメージURL
  maxTemperature: string; // 最高温度
  minTemperature: string; // 最低温度
};

export default function OtherdayWeatherDetailItem(props: Props) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80%",
          width: "40%",
          textAlign: "center",
          margin: 2,
          backgroundColor: "grey.50",
        }}
      >
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography gutterBottom color="secondary.contrastText">
              {`${props.dateLabel}：${props.date}`}
            </Typography>
            <img
              src={props.imageUrl}
              style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
            />
            <Typography variant="h6">
              最高 {props.maxTemperature || "N/A"} ℃ / 最低{" "}
              {props.minTemperature} ℃
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
