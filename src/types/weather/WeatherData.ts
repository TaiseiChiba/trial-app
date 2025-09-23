export type WeatherData = {
  location: {
    city: string; // 都市名
  };
  forecasts: {
    date: string; // 日付
    dateLabel: string; // 予報日（今日・明日・明後日のいずれか）
    telop: string; // 天気状態
    detail: {
      weather: string; // 詳細な天気情報
      wind: string; // 風の強さ
      wave: string | null; // 波の高さ（海に面している地域のみ）
    };
    temperature: {
      max: { celsius: string | null } | null; // 最高気温（nullの場合もある）
      min: { celsius: string | null } | null; // 最低気温（nullの場合もある）
    };
    chanceOfRain: {
      // 降水確率
      T00_06: string; // 0~6時
      T06_12: string; // 6~12時
      T12_18: string; // 12~18時
      T18_24: string; // 18~24時
    };
    image: {
      url: string; // 天気アイコンのURL
    };
  }[];
};
