import type { ForecastDay } from "../../services/forecast.service";

interface Props {
  day: ForecastDay;
}

export default function ForecastCard({ day }: Props) {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="font-semibold text-lg">
        {new Date(day.date).toLocaleDateString("en-IN", {
            weekday: "long",
        })}
      </h2>

        <p className="text-sm text-slate-500">
          {new Date(day.date).toLocaleDateString("en-IN")}
        </p>

      <img
        src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`}
        alt={day.condition}
        className="mx-auto h-20 w-20"
      />

      <p className="mt-4 text-4xl font-bold">
        {day.temperature}°C
      </p>

      <p className="mt-3 text-slate-600">
        {day.condition}
      </p>

      <div className="mt-5 space-y-2 text-sm">
        <p>💧 {day.humidity}%</p>
        <p>🌬 {day.wind} m/s</p>
      </div>
    </div>
  );
}