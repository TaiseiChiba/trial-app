import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

type Props = {
  isDarkMode: boolean;
  setIsDarkMode: (isDarkMode: boolean) => void;
};

export default function WeatherAppHeader(props: Props) {
  return (
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
                  checked={props.isDarkMode}
                  onChange={(e) => props.setIsDarkMode(e.target.checked)}
                />
              }
              label="夜間モード"
              labelPlacement="start" // ← ラベルを右寄せにする場合
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
