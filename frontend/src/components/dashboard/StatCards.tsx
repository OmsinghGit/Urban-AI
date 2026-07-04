import Card from "../common/Card";
import { dashboardStats } from "../../constants/mockData";

export default function StatCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => (
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