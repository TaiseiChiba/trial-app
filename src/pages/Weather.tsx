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
import SearchWeather from "../features/Weather/components/header/WeatherAppHeader";
import WeaherAppBody from "../features/Weather/components/body/WeaherAppBody";

export default function Weather() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [weather, setWeather] = useState<WeatherData | null>(null);
  // エラーメッセージを管理するstate：string型またはnull型を使用して型定義
  const [error, setError] = useState<string | null>(null);

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
          <SearchWeather isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

          {/** ボディ部分 */}
          <WeaherAppBody weather={weather} />
        </Box>
      </Box>
    </ThemeProvider >
  );
}
