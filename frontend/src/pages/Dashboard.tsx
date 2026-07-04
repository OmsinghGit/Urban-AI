import StatCards from "../components/dashboard/StatCards";
import AQIChart from "../components/dashboard/AQIChart";
import PollutionMap from "../components/dashboard/PollutionMap";
import AIInsights from "../components/dashboard/AIInsights";

import { useDashboard } from "../hooks/useDashboard";

export default function Dashboard() {
  const { dashboard, loading } = useDashboard();

  if (loading || !dashboard) {
    return <h1 className="text-2xl">Loading Dashboard...</h1>;
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-slate-500">
          AI-Powered Urban Air Quality Decision Intelligence
        </p>
      </div>

      <StatCards stats={dashboard.stats} />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
         <AQIChart data={dashboard.aqiTrend} />
        </div>

        <PollutionMap />
      </div>

      <AIInsights />
    </div>
  );
}