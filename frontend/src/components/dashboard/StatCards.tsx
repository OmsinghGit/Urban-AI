import Card from "../common/Card";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
  );
}