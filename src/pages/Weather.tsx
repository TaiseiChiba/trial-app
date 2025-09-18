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
import React, { useState } from "react";
import SearchWeather from "../features/Weather/SearchWeather";
import { darkTheme, lightTheme } from "../features/Weather/theme/theme";
import styled from "@emotion/styled";

export default function Weather() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [location, setLocation] = useState("東京");
  const [wheatherState, setWeatherState] = useState("晴天");
  const [tempreture, setTempreture] = useState(20);
  const [feelingTemperature, setFeelingTemperature] = useState(15);
  const [minTemperature, setMinTemperature] = useState(9);
  const [maxTemperature, setMaxTemperature] = useState(20);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          background: (theme) =>
            theme.palette.mode === "light"
              ? "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)"
              : "linear-gradient(135deg, #2c3e50 0%, #3498db 100%)",
        }}
      >
        <Container maxWidth="lg" sx={{ py: 3 }}>
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
                        variant="h5"
                        gutterBottom
                        color="secondary.contrastText"
                      >
                        📍{location}
                      </Typography>
                      <Typography variant="h2">☀️</Typography>
                      <Typography variant="h3">{tempreture} ℃</Typography>
                      <Typography variant="h5">{wheatherState}</Typography>
                      <Typography variant="h6">
                        体感温度 {feelingTemperature} ℃
                      </Typography>
                      <Typography variant="h5">
                        最高 {maxTemperature} ℃ / 最低 {minTemperature} ℃
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ mb: 3 }}>
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      小部分
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        flexWrap: "wrap",
                        mt: 2,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          borderRadius: 1,
                        }}
                      >
                        Primary Color
                      </Box>
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: "secondary.main",
                          color: "secondary.contrastText",
                          borderRadius: 1,
                        }}
                      >
                        Secondary Color
                      </Box>
                      <Box
                        sx={{
                          p: 2,
                          bgcolor: "background.paper",
                          color: "text.primary",
                          border: 1,
                          borderColor: "divider",
                          borderRadius: 1,
                        }}
                      >
                        Background Paper
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* デモ用 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            セットアップ完了!(参考部分)
          </Typography>
          <Typography color="text.secondary" paragraph>
            MUI + React + TypeScript の基本設定が完了しました。
            テーマの切り替えも正常に動作しています。
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexWrap: "wrap",
              mt: 2,
            }}
          >
            <Box
              sx={{
                p: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 1,
              }}
            >
              Primary Color
            </Box>
            <Box
              sx={{
                p: 2,
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                borderRadius: 1,
              }}
            >
              Secondary Color
            </Box>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.paper",
                color: "text.primary",
                border: 1,
                borderColor: "divider",
                borderRadius: 1,
              }}
            >
              Background Paper
            </Box>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
