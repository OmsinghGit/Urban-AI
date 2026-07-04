import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboard.service";
import type { DashboardResponse } from "../services/dashboard.service";

export function useDashboard() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDashboard()
      .then(setDashboard)
      .finally(() => setLoading(false));
  }, []);

  return { dashboard, loading };
}