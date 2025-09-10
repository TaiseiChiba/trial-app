import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function SearchWeather() {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <TextField id="outlined-basic" label="地名" variant="outlined" />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">検索</Button>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ maxWidth: 345, width: "100%" }}>
            <CardMedia component="img" height="140" image="..." />
            <CardContent>
              <Typography gutterBottom variant="h5">
                タイトル
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
