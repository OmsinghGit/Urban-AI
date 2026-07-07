import { useReport } from "../hooks/useReport";

export default function Reports() {
  const report = useReport("Delhi");

  if (!report) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Report...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Environmental Report
      </h1>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <div className="grid gap-6 md:grid-cols-2">

          <div>
            <p className="text-slate-500">
              City
            </p>

            <h2 className="text-2xl font-bold">
              {report.city}
            </h2>
          </div>

          <div>
            <p className="text-slate-500">
              AQI
            </p>

            <h2 className="text-2xl font-bold">
              {report.stats[0].value}
            </h2>
          </div>

          <div>
            <p className="text-slate-500">
              PM2.5
            </p>

            <h2 className="text-2xl font-bold">
              {report.stats[1].value}
            </h2>
          </div>

          <div>
            <p className="text-slate-500">
              Temperature
            </p>

            <h2 className="text-2xl font-bold">
              {report.weather.temperature}°C
            </h2>
          </div>

          <div>
            <p className="text-slate-500">
              Humidity
            </p>

            <h2 className="text-2xl font-bold">
              {report.weather.humidity}%
            </h2>
          </div>

          <div>
            <p className="text-slate-500">
              Wind
            </p>

            <h2 className="text-2xl font-bold">
              {report.weather.wind} m/s
            </h2>
          </div>

        </div>

      </div>

      <div className="rounded-2xl border bg-white p-8 shadow-sm">

        <h2 className="mb-4 text-2xl font-bold">
          AI Environmental Summary
        </h2>

        <p className="leading-8 text-slate-700">
          {report.summary}
        </p>

      </div>

      <button
        className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Download PDF
      </button>

    </div>
  );
}