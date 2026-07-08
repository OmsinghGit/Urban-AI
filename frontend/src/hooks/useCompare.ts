import { useState } from "react";
import { compareCities } from "../services/compare.service";

export function useCompare() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function compare(
    city1: string,
    city2: string
  ) {
    setLoading(true);

    try {
      const data = await compareCities(
        city1,
        city2
      );

      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    result,
    compare,
  };
}