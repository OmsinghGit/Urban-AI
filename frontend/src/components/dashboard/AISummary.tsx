interface Props {
  summary: string;
}

export default function AISummary({ summary }: Props) {
  return (
    <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold text-blue-900">
        🤖 AI Summary
      </h2>

      <p className="leading-7 text-slate-700">
        {summary}
      </p>
    </div>
  );
}