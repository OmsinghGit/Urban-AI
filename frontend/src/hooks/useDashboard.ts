import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";
import type { DashboardResponse } from "../services/dashboard.service";

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
      } catch {
        setDashboard(null);
        setError("City not found");
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