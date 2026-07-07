import { useEffect, useState } from "react";

import { getReport } from "../services/report.service";

export function useReport(
  city: string
) {
  const [report, setReport] = useState<any>(null);

  useEffect(() => {
    getReport(city).then(setReport);
  }, [city]);

  return report;
}