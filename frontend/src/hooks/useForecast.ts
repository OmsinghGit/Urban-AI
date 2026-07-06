import { useEffect, useState } from "react";

import { getForecast } from "../services/forecast.service";
import type { ForecastDay } from "../services/forecast.service";

export function useForecast(city: string) {
  const [forecast, setForecast] =
    useState<ForecastDay[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data =
          await getForecast(city);

        setForecast(data);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [city]);

  return {
    forecast,
    loading,
  };
}