import {
  Wind,
  Activity,
  Thermometer,
  ShieldAlert,
} from "lucide-react";

type CardProps = {
  title: string;
  value: string;
  subtitle: string;
};

export default function Card({
  title,
  value,
  subtitle,
}: CardProps) {
  const config = {
    "Current AQI": {
      icon: Wind,
      color: "text-red-500",
      bg: "bg-red-50",
      accent: "bg-red-500",
    },
    "PM2.5": {
      icon: Activity,
      color: "text-orange-500",
      bg: "bg-orange-50",
      accent: "bg-orange-500",
    },
    Temperature: {
      icon: Thermometer,
      color: "text-blue-500",
      bg: "bg-blue-50",
      accent: "bg-blue-500",
    },
    "Risk Level": {
      icon: ShieldAlert,
      color: "text-purple-500",
      bg: "bg-purple-50",
      accent: "bg-purple-500",
    },
  } as const;

  const item =
    config[title as keyof typeof config] ??
    config["Current AQI"];

  const Icon = item.icon;

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            {value}
          </h2>

          <p className="mt-3 text-sm text-slate-500">
            {subtitle}
          </p>
        </div>

        <div
          className={`rounded-xl p-3 ${item.bg}`}
        >
          <Icon
            className={`h-8 w-8 ${item.color}`}
          />
        </div>
      </div>

      <div
        className={`mt-5 h-1 w-16 rounded-full transition-all duration-300 group-hover:w-full ${item.accent}`}
      />
    </div>
  );
}