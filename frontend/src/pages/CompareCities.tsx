import { useState } from "react";
import { useCompare } from "../hooks/useCompare";

export default function CompareCities() {

  const [city1, setCity1] = useState("Delhi");
  const [city2, setCity2] = useState("Mumbai");

  const {
    loading,
    result,
    compare,
  } = useCompare();

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Compare Cities
      </h1>

      <div className="flex gap-4">

        <input
          value={city1}
          onChange={(e) =>
            setCity1(e.target.value)
          }
          className="rounded-xl border p-3"
        />

        <input
          value={city2}
          onChange={(e) =>
            setCity2(e.target.value)
          }
          className="rounded-xl border p-3"
        />

        <button
          onClick={() =>
            compare(city1, city2)
          }
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          Compare
        </button>

      </div>

      {loading && (
        <h2>Comparing...</h2>
      )}

      {result && (

        <table className="w-full rounded-xl border">

          <thead>

            <tr className="bg-slate-100">

              <th className="p-4">
                Metric
              </th>

              <th>
                {result.city1.city}
              </th>

              <th>
                {result.city2.city}
              </th>

            </tr>

          </thead>

          <tbody>

            <tr>

              <td className="p-4">
                AQI
              </td>

              <td>
                {result.city1.stats[0].value}
              </td>

              <td>
                {result.city2.stats[0].value}
              </td>

            </tr>

            <tr>

              <td className="p-4">
                PM2.5
              </td>

              <td>
                {result.city1.stats[1].value}
              </td>

              <td>
                {result.city2.stats[1].value}
              </td>

            </tr>

            <tr>

              <td className="p-4">
                Temperature
              </td>

              <td>
                {result.city1.weather.temperature}°C
              </td>

              <td>
                {result.city2.weather.temperature}°C
              </td>

            </tr>

            <tr>

              <td className="p-4">
                Risk
              </td>

              <td>
                {result.city1.stats[3].value}
              </td>

              <td>
                {result.city2.stats[3].value}
              </td>

            </tr>

          </tbody>

        </table>

      )}

    </div>
  );
}