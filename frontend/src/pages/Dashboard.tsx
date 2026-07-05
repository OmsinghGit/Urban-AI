import StatCards from "../components/dashboard/StatCards";
import AQIChart from "../components/dashboard/AQIChart";
import PollutionMap from "../components/dashboard/PollutionMap";
import AIInsights from "../components/dashboard/AIInsights";

import { useDashboard } from "../hooks/useDashboard";


export default function Dashboard() {
  //  console.log("Dashboard Rendered");
  const { dashboard, loading } = useDashboard();

    // console.log("loading:", loading);
    // console.log("dashboard:", dashboard);

  if (loading || !dashboard) {
    return (
      <div className="flex items-center justify-center h-[70vh]">
        <h2 className="text-2xl font-semibold text-slate-600">
          Loading Dashboard...
        </h2>
      </div>
    );
  }
  

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Urban Air Quality Dashboard
          </h1>

          <p className="mt-2 text-slate-500">
            AI-Powered Real-Time Environmental Intelligence
          </p>
        </div>

        <div className="text-right">
          <p className="text-lg font-semibold text-slate-700">
            Delhi, India
          </p>

          <p className="text-sm text-slate-500">
            Last Updated • Just Now
          </p>
        </div>
      </div>

      {/* Stat Cards */}
      <StatCards stats={dashboard.stats} />

      {/* Chart + Map */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AQIChart data={dashboard.aqiTrend} />
        </div>

        <PollutionMap />
      </div>

      {/* AI Insights */}
      <AIInsights />
    </div>
  );
}