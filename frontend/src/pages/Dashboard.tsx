import StatCards from "../components/dashboard/StatCards";
import AQIChart from "../components/dashboard/AQIChart";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="mt-2 text-slate-500">
          AI-Powered Urban Air Quality Decision Intelligence
        </p>
      </div>

      <StatCards />

      <AQIChart />
    </div>
  );
}