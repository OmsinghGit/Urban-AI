export default function PollutionMap() {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-md h-full">
      <h2 className="mb-4 text-xl font-semibold">
        Pollution Hotspots
      </h2>

      <div className="flex h-80 items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-slate-50">
        <div className="text-center">
          <p className="text-6xl">🗺️</p>

          <p className="mt-3 text-slate-500">
            Live Pollution Map
          </p>

          <p className="text-sm text-slate-400">
            Leaflet Integration Coming Next
          </p>
        </div>
      </div>
    </div>
  );
}