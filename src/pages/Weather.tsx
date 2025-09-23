import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  ListItem,
  Stack,
  Switch,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { darkTheme, lightTheme } from "../features/Weather/theme/theme";
import styled from "@emotion/styled";
import { WeatherData } from "../types/weather/WeatherData";
import apiClient from "../features/Weather/api/api";

export default function Weather() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [weather, setWeather] = useState<WeatherData | null>(null);
  // エラーメッセージを管理するstate：string型またはnull型を使用して型定義
  const [error, setError] = useState<string | null>(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await apiClient.get<WeatherData>(
          "/forecast/city/130010"
        );
        setWeather(response.data);
      } catch (err) {
        // エラーが発生した場合、エラーメッセージをstateにセット
        setError((err as Error).message);
      }
    };
    fetchWeather();
  });

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          width: "100%", // 画面幅いっぱいにする
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
              : "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
        }}
      >
        <Box sx={{ p: 3 }} >
          {/* ヘッダー部分 */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h4" component="h1" fontWeight="bold">
                🌤️ Weather App
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between", // 両端配置
                  alignItems: "center", // 縦位置を揃える
                  flexWrap: "wrap",
                  mt: 2,
                }}
              >
                {/* 左側（中央寄せしたい場合はさらにBoxで囲む） */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                    justifyContent: "center",
                    flex: 1,
                  }}
                >
                  <Button variant="outlined">🔍 検索</Button>
                  <Button variant="outlined">⭐ お気に入り</Button>
                  <Button variant="outlined">⚙️ 設定</Button>
                </Box>

                {/* 右側（スイッチ） */}
                <Box>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={isDarkMode}
                        onChange={(e) => setIsDarkMode(e.target.checked)}
                      />
                    }
                    label="夜間モード"
                    labelPlacement="start" // ← ラベルを右寄せにする場合
                  />
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/** ボディ部分 */}
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={8}>
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
                      <Typography
                        gutterBottom
                        color="secondary.contrastText"
                      >
                        {`${weather?.forecasts[0].dateLabel}：${weather?.forecasts[0].date}`}
                      </Typography>
                      <Typography
                        variant="h5"
                        gutterBottom
                        color="secondary.contrastText"
                      >
                        📍{weather?.location.city}
                      </Typography>
                      <img
                        src={weather?.forecasts[0].image.url}
                        style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
                      />
                      <Typography variant="h5">
                        {weather?.forecasts[0].telop}
                      </Typography>
                      <Typography variant="h6">
                        最高{" "}
                        {weather?.forecasts[0].temperature.max?.celsius ||
                          "N/A"}{" "}
                        ℃ / 最低{" "}
                        {weather?.forecasts[0].temperature.min?.celsius ||
                          "N/A"}{" "}
                        ℃
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
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
                      backgroundColor: 'grey.50',
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2} alignItems="center">
                        <Typography variant="h4">🧭</Typography>
                        <Typography>風向き</Typography>
                        <Typography>{weather?.forecasts[0].detail.wind}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
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
                      backgroundColor: 'grey.50',
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2} alignItems="center">
                        <Typography variant="h4">🌊</Typography>
                        <Typography>波の高さ</Typography>
                        <Typography>{weather?.forecasts[0].detail.wave}</Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Card>
              </Grid>
            </Grid>
          </Box>

          <Box sx={{ my: 3 }}>
            <Card>
              <CardContent>
                <Stack>
                  <Typography variant="h5">明日・明後日の天気</Typography>
                  <Box
                    display="flex"           // flexコンテナにする
                    flexDirection="row"      // 子要素を横並びにする（rowはデフォルト）
                    justifyContent="space-between" // 横方向のスペースを均等に
                    alignItems="center"      // 縦方向の中央揃え
                    p={2}                    // パディング
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
                        backgroundColor: 'grey.50',
                      }}
                    >
                      <CardContent>
                        <Stack spacing={2} alignItems="center">
                          <Typography
                            gutterBottom
                            color="secondary.contrastText"
                          >
                            {`${weather?.forecasts[1].dateLabel}：${weather?.forecasts[1].date}`}
                          </Typography>
                          <img
                            src={weather?.forecasts[1].image.url}
                            style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
                          />
                          <Typography variant="h6">
                            最高{" "}
                            {weather?.forecasts[1].temperature.max?.celsius ||
                              "N/A"}{" "}
                            ℃ / 最低{" "}
                            {weather?.forecasts[1].temperature.min?.celsius ||
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
                        backgroundColor: 'grey.50',
                      }}
                    >
                      <CardContent>
                        <Stack spacing={2} alignItems="center">
                          <Typography
                            gutterBottom
                            color="secondary.contrastText"
                          >
                            {`${weather?.forecasts[2].dateLabel}：${weather?.forecasts[2].date}`}
                          </Typography>
                          <img
                            src={weather?.forecasts[2].image.url}
                            style={{ width: "100px", height: "100px" }} // アイコン画像のサイズ
                          />
                          <Typography variant="h6">
                            最高{" "}
                            {weather?.forecasts[2].temperature.max?.celsius ||
                              "N/A"}{" "}
                            ℃ / 最低{" "}
                            {weather?.forecasts[2].temperature.min?.celsius ||
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
        </Box>
      </Box>
    </ThemeProvider >
  );
}
