import React from "react";
import { WeatherData } from "../../../../../../types/weather/WeatherData";
import { Card, CardContent, Stack, Typography } from "@mui/material";

type Props = {
  icon: string; // アイコン
  index: string; // 項目
  detail: string | null; // 詳細説明
};

export default function TodayWeatherDetailItem(props: Props) {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "40%",
          width: "90%",
          textAlign: "center",
          margin: 2,
          backgroundColor: "grey.50",
        }}
      >
        <CardContent>
          <Stack spacing={2} alignItems="center">
            <Typography variant="h4">{props.icon}</Typography>
            <Typography>{props.index}</Typography>
            <Typography>{props.detail}</Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
