import { useState } from "react";

import StatCards from "../components/dashboard/StatCards";
import AQIChart from "../components/dashboard/AQIChart";
import PollutionMap from "../components/dashboard/PollutionMap";
import AIInsights from "../components/dashboard/AIInsights";
import WeatherCard from "../components/dashboard/WeatherCard";

import { useDashboard } from "../hooks/useDashboard";

import AISummary from "../components/dashboard/AISummary";

export default function Dashboard() {
  const [inputCity, setInputCity] = useState("Delhi");
const [city, setCity] = useState("Delhi");

const {
  dashboard,
  loading,
  error,
} = useDashboard(city);

  if (loading || !dashboard) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-semibold text-slate-600">
          Loading Dashboard...
        </h2>
      </div>
    );
  }

  if (error) {
  return (
    <div className="flex h-[70vh] items-center justify-center">
      <h2 className="text-xl font-semibold text-red-500">
        {error}
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
            {dashboard.city}
          </p>

          <p className="text-sm text-slate-500">
            Last Updated • Live
          </p>
        </div>
      </div>

      {/* City Search */}
      <div className="flex gap-3">
  <input
    type="text"
    value={inputCity}
    onChange={(e) => setInputCity(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        setCity(inputCity);
      }
    }}
    placeholder="Search City..."
    className="w-72 rounded-xl border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
  />

  <button
    onClick={() => setCity(inputCity)}
    className="rounded-xl bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700"
  >
    Search
  </button>
</div>

      {/* Stat Cards */}
      <StatCards stats={dashboard.stats} />

      {/* Chart + Map */}
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">

          <AQIChart
            data={dashboard.aqiTrend}
          />
        </div>

        <PollutionMap />
      </div>

      {/* AI Insights + Weather */}
      <div className="grid gap-6 xl:grid-cols-2">
        <AISummary summary={dashboard.summary} />

        <WeatherCard weather={dashboard.weather} />
      </div>
    </div>
  );
}

export type WeatherInfo = {
  temperature: number;
  humidity: number;
  wind: number;
  condition: string;
};

export type DashboardResponse = {
  stats: DashboardStat[];
  aqiTrend: AQITrend[];
  city: string;
  weather: WeatherInfo;
  summary: string;
};