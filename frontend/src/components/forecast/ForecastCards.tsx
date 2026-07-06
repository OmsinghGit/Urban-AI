import type { ForecastDay }
from "../../services/forecast.service";

interface Props {
  data: ForecastDay[];
}

export default function ForecastCards({
  data,
}: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
      {data.map((day) => (
        <div
          key={day.date}
          className="rounded-2xl border bg-white p-6 shadow-sm"
        >
          <h3 className="font-semibold">
            {day.date}
          </h3>

          <p className="mt-4 text-4xl font-bold">
            {day.temperature}°
          </p>

          <p className="mt-3 text-slate-500">
            {day.condition}
          </p>

          <div className="mt-5 space-y-2 text-sm">
            <p>
              💧 {day.humidity}%
            </p>

            <p>
              🌬 {day.wind} m/s
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}