import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { time: "6 AM", aqi: 92 },
  { time: "9 AM", aqi: 118 },
  { time: "12 PM", aqi: 142 },
  { time: "3 PM", aqi: 168 },
  { time: "6 PM", aqi: 155 },
  { time: "9 PM", aqi: 130 },
];

export default function AQIChart() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <h2 className="mb-4 text-xl font-semibold">
        AQI Trend (Today)
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="time" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#2563eb"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}