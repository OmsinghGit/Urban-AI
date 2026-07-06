import { useForecast } from "../hooks/useForecast";
import ForecastCard from "../components/forecast/ForecastCard";

export default function Forecast() {
  const { forecast, loading } = useForecast("Delhi");

  if (loading) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <h2 className="text-2xl font-semibold">
          Loading Forecast...
        </h2>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        5-Day Forecast
      </h1>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

        {forecast.map((day) => (
          <ForecastCard
            key={day.date}
            day={day}
          />
        ))}

      </div>

    </div>
  );
}