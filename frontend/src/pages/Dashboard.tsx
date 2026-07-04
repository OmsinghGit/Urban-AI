import StatCards from "../components/dashboard/StatCards";
import AQIChart from "../components/dashboard/AQIChart";
import PollutionMap from "../components/dashboard/PollutionMap";

export default function Dashboard() {
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

      <StatCards />

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <AQIChart />
        </div>

        <PollutionMap />
      </div>
    </div>
  );
}