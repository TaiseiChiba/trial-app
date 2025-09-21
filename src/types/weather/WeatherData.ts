export type WeatherData = {
  location: {
    city: string; // 都市名
  };
  forecasts: {
    state: {
      weatherState: string; // 天気の説明
    };
    temperature: {
      now: { celsius: string | null } | null; // 現在気温（nullの場合もある）
      max: { celsius: string | null } | null; // 最高気温（nullの場合もある）
      min: { celsius: string | null } | null; // 最低気温（nullの場合もある）
      feeling: { celsius: string | null } | null; // 体感温度（nullの場合もある）
    };
  };
  image: {
    url: string; // 天気アイコンのURL
  };
};
