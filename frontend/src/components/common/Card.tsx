type CardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function Card({ title, value, subtitle }: CardProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-md border">
      <h3 className="text-sm text-slate-500">{title}</h3>

      <p className="mt-3 text-3xl font-bold">{value}</p>

      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}