import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export type DashboardStat = {
  title: string;
  value: string;
  subtitle: string;
};

export type AQITrend = {
  time: string;
  aqi: number;
};

export type WeatherInfo = {
  temperature: number;
  humidity: number;
  wind: number;
  condition: string;
};

export type DashboardResponse = {
  stats: DashboardStat[];
  city: string;
  weather: WeatherInfo;
  summary: string;
  aqiTrend: AQITrend[];
};
export async function getDashboard(
  city: string = "Delhi"
): Promise<DashboardResponse> {

  const response = await api.get("/dashboard/live", {
    params: {
      city,
    },
  });

  return response.data;
}

