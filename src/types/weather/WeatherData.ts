export type WeatherData = {
  location: {
    city: string; // 都市名
  };
  forecasts: {
    telop: string; // 天気状態
    temperature: {
      max: { celsius: string | null } | null; // 最高気温（nullの場合もある）
      min: { celsius: string | null } | null; // 最低気温（nullの場合もある）
    };
    image: {
      url: string; // 天気アイコンのURL
    };
  }[];
};
