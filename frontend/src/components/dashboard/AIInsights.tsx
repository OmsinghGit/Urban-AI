import {
  AlertTriangle,
  TrendingUp,
  CircleCheckBig,
} from "lucide-react";

const insights = [
  {
    icon: AlertTriangle,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "High Pollution Hotspot",
    description:
      "PM2.5 concentration is critically high near Central Delhi.",
  },
  {
    icon: TrendingUp,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "Predicted AQI Increase",
    description:
      "AQI may increase by approximately 12% in the next 6 hours.",
  },
  {
    icon: CircleCheckBig,
    color: "text-green-500",
    bg: "bg-green-50",
    title: "Recommended Action",
    description:
      "Restrict heavy vehicles and increase road sprinkling.",
  },
];

export default function AIInsights() {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-semibold">
        AI Decision Insights
      </h2>

      <div className="space-y-4">
        {insights.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className={`flex items-start gap-4 rounded-xl p-4 ${item.bg}`}
            >
              <Icon
                className={`mt-1 h-6 w-6 ${item.color}`}
              />

              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}