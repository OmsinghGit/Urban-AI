import { useState } from "react";
import { usePolicy } from "../hooks/usePolicy";

export default function PolicySimulator() {
  const { result, loading, predict } = usePolicy();

  const [traffic, setTraffic] = useState(30);
  const [industry, setIndustry] = useState(30);
  const [construction, setConstruction] = useState(30);
  const [greenery, setGreenery] = useState(30);

  function getRiskColor(risk: string) {
    switch (risk) {
      case "Good":
        return "text-green-600";

      case "Moderate":
        return "text-yellow-500";

      case "Unhealthy for Sensitive":
        return "text-orange-500";

      case "Unhealthy":
        return "text-red-500";

      case "Very Unhealthy":
        return "text-purple-600";

      default:
        return "text-red-700";
    }
  }

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Policy Simulator
      </h1>

      {/* Sliders */}

      <div className="space-y-6 rounded-2xl border bg-white p-6 shadow-sm">

        <div>
          <label className="font-medium">
            Traffic Reduction ({traffic}%)
          </label>

          <input
            type="range"
            min={0}
            max={100}
            value={traffic}
            onChange={(e) =>
              setTraffic(Number(e.target.value))
            }
            className="w-full"
          />
        </div>

        <div>
          <label className="font-medium">
            Industrial Emission Control ({industry}%)
          </label>

          <input
            type="range"
            min={0}
            max={100}
            value={industry}
            onChange={(e) =>
              setIndustry(Number(e.target.value))
            }
            className="w-full"
          />
        </div>

        <div>
          <label className="font-medium">
            Construction Control ({construction}%)
          </label>

          <input
            type="range"
            min={0}
            max={100}
            value={construction}
            onChange={(e) =>
              setConstruction(Number(e.target.value))
            }
            className="w-full"
          />
        </div>

        <div>
          <label className="font-medium">
            Green Cover Increase ({greenery}%)
          </label>

          <input
            type="range"
            min={0}
            max={100}
            value={greenery}
            onChange={(e) =>
              setGreenery(Number(e.target.value))
            }
            className="w-full"
          />
        </div>

        <button
          onClick={() =>
            predict({
              currentAQI: 170,
              traffic,
              industry,
              construction,
              greenery,
            })
          }
          className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          Predict AQI
        </button>

      </div>

      {/* Loading */}

      {loading && (
        <p className="text-lg font-medium">
          Predicting...
        </p>
      )}

      {/* Result */}

      {result && (

        <div className="rounded-2xl border bg-white p-8 shadow-sm">

          <h2 className="mb-8 text-2xl font-bold">
            Simulation Result
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <p className="text-slate-500">
                Current AQI
              </p>

              <p className="text-4xl font-bold">
                {result.currentAQI}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Predicted AQI
              </p>

              <p className="text-4xl font-bold text-green-600">
                {result.predictedAQI}
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Improvement
              </p>

              <p className="text-2xl font-semibold">
                {result.improvement}%
              </p>
            </div>

            <div>
              <p className="text-slate-500">
                Risk Level
              </p>

              <p
                className={`text-2xl font-semibold ${getRiskColor(
                  result.risk
                )}`}
              >
                {result.risk}
              </p>
            </div>

          </div>

        </div>

      )}

    </div>
  );
}