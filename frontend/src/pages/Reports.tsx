import { useReport } from "../hooks/useReport";

export default function Reports() {

  const report = useReport("Delhi");

  if (!report)
    return <h2>Loading Report...</h2>;

  return (
    <div className="space-y-8">

      <h1 className="text-4xl font-bold">
        Environmental Report
      </h1>

      <pre className="rounded-xl bg-slate-900 p-6 text-green-400 overflow-auto">
        {JSON.stringify(report, null, 2)}
      </pre>

    </div>
  );
}