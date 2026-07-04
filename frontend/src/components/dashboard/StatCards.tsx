import Card from "../common/Card";
import type { DashboardStat } from "../../services/dashboard.service";

interface Props {
  stats: DashboardStat[];
}

export default function StatCards({ stats }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
        />
      ))}
    </div>
  );
}