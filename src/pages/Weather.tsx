import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Grid,
  ListItem,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import SearchWeather from "../features/Weather/SearchWeather";
import { darkTheme, lightTheme } from "../features/Weather/theme/theme";

export default function Weather() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    // <Grid container spacing={2}>
    //   <Grid item xs={12}>
    //     <Typography variant="h2" gutterBottom>
    //       🌤️ Weather App
    //     </Typography>
    //   </Grid>
    //   <Grid item xs={12}>
    //     <SearchWeather />
    //   </Grid>
    // </Grid>
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
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h4" component="h1" fontWeight="bold">
              🌤️ Weather App
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* デモ用 */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            セットアップ完了!
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

      {/* 次ステップの予告 */}
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            📋 次のステップ (Step 2)
          </Typography>
          <Typography color="text.secondary">
            型定義とAPI設定を行います：
          </Typography>
          <Box component="ul" sx={{ mt: 1 }}>
            <li>TypeScript型定義の作成</li>
            <li>OpenWeatherMap API設定</li>
            <li>カスタムフック実装</li>
          </Box>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
