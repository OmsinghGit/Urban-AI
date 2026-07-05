import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";
import type { DashboardResponse } from "../services/dashboard.service";
import axios from "axios";

export function useDashboard(city: string) {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      setLoading(true);

      try {
        const data = await getDashboard(city);

        setDashboard(data);
        setError("");
      } catch (err) {
        setDashboard(null);

        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.detail ?? "Unable to load dashboard.");
        } else {
          setError("Something went wrong.");
        }
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [city]);

  return {
    dashboard,
    loading,
    error,
  };
}