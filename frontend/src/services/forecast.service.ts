import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export type ForecastDay = {
  date: string;
  temperature: number;
  humidity: number;
  wind: number;
  condition: string;
  icon: string;
};

export async function getForecast(
  city: string = "Delhi"
): Promise<ForecastDay[]> {
  const response = await api.get("/forecast", {
    params: {
      city,
    },
  });

  return response.data;
}