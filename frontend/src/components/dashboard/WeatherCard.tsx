import type { WeatherInfo } from "../../services/dashboard.service";

interface Props {
  weather: WeatherInfo;
}

export default function WeatherCard({ weather }: Props) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-slate-900">
        Weather
      </h2>

      <div className="space-y-3">
        <p>
          🌡 <strong>Temperature:</strong> {weather.temperature}°C
        </p>

        <p>
          ☁️ <strong>Condition:</strong> {weather.condition}
        </p>

        <p>
          💧 <strong>Humidity:</strong> {weather.humidity}%
        </p>

        <p>
          💨 <strong>Wind:</strong> {weather.wind} m/s
        </p>
      </div>
    </div>
  );
}