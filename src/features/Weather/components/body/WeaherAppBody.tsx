import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { WeatherData } from "../../../../types/weather/WeatherData";
import TodayWeatherCard from "./card/TodayWeatherCard";
import TodayWeatherDetailCard from "./card/TodayWeatherDetailCard";

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
                        {`${props.weather?.forecasts[1].dateLabel}：${props.weather?.forecasts[1].date}`}
                      </Typography>
                      <img
                        src={props.weather?.forecasts[1].image.url}
                        style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
                      />
                      <Typography variant="h6">
                        最高{" "}
                        {props.weather?.forecasts[1].temperature.max?.celsius ||
                          "N/A"}{" "}
                        ℃ / 最低{" "}
                        {props.weather?.forecasts[1].temperature.min?.celsius ||
                          "N/A"}{" "}
                        ℃
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
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
                        {`${props.weather?.forecasts[2].dateLabel}：${props.weather?.forecasts[2].date}`}
                      </Typography>
                      <img
                        src={props.weather?.forecasts[2].image.url}
                        style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
                      />
                      <Typography variant="h6">
                        最高{" "}
                        {props.weather?.forecasts[2].temperature.max?.celsius ||
                          "N/A"}{" "}
                        ℃ / 最低{" "}
                        {props.weather?.forecasts[2].temperature.min?.celsius ||
                          "N/A"}{" "}
                        ℃
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
