import { AlertTriangle, Brain, CheckCircle2, TrendingUp } from "lucide-react";

export default function AIInsights() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md">
      <div className="mb-5 flex items-center gap-2">
        <Brain className="text-blue-600" size={24} />
        <h2 className="text-xl font-semibold">
          AI Decision Insights
        </h2>
      </div>

      <div className="space-y-4">

        <div className="flex items-start gap-3 rounded-lg bg-red-50 p-4">
          <AlertTriangle className="mt-1 text-red-500" size={20} />

          <div>
            <p className="font-semibold">
              High Pollution Hotspot
            </p>

            <p className="text-sm text-slate-600">
              PM2.5 concentration is critically high near Central Delhi.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-blue-50 p-4">
          <TrendingUp className="mt-1 text-blue-600" size={20} />

          <div>
            <p className="font-semibold">
              Predicted AQI Increase
            </p>

            <p className="text-sm text-slate-600">
              AQI may increase by approximately 12% in the next 6 hours.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 rounded-lg bg-green-50 p-4">
          <CheckCircle2 className="mt-1 text-green-600" size={20} />

          <div>
            <p className="font-semibold">
              Recommended Action
            </p>

            <p className="text-sm text-slate-600">
              Restrict heavy vehicles and increase road water sprinkling.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}