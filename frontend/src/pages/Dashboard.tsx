import Card from "../components/common/Card";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Dashboard</h1>

        <p className="text-slate-500 mt-2">
          AI-Powered Urban Air Quality Decision Intelligence
        </p>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <Card
          title="Current AQI"
          value="168"
          subtitle="Unhealthy"
        />

        <Card
          title="PM2.5"
          value="94 µg/m³"
          subtitle="Above Safe Limit"
        />

        <Card
          title="Temperature"
          value="34°C"
          subtitle="Feels Like 38°C"
        />

        <Card
          title="Risk Level"
          value="High"
          subtitle="Immediate Attention"
        />
      </div>
    </div>
  );
}