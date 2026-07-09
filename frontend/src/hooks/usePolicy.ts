import { useState } from "react";
import { predictPolicy } from "../services/policy.service";
import type { PolicyResponse } from "../services/policy.service";

export function usePolicy() {
  const [result, setResult] =
    useState<PolicyResponse | null>(null);

  const [loading, setLoading] =
    useState(false);

  async function predict(payload: any) {
    setLoading(true);

    try {
      const data =
        await predictPolicy(payload);

      setResult(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    result,
    loading,
    predict,
  };
}