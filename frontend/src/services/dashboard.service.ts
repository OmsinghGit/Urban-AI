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

export type DashboardResponse = {
  stats: DashboardStat[];
  aqiTrend: AQITrend[];
};

export async function getDashboard(): Promise<DashboardResponse> {
  const response = await api.get("/dashboard/");
  return response.data;
}