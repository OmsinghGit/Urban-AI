import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export type PolicyRequest = {
  currentAQI: number;
  traffic: number;
  industry: number;
  construction: number;
  greenery: number;
};

export type PolicyResponse = {
  currentAQI: number;
  predictedAQI: number;
  improvement: number;
  risk: string;
};

export async function predictPolicy(
  payload: PolicyRequest
): Promise<PolicyResponse> {
  const response = await api.post(
    "/policy/predict",
    payload
  );

  return response.data;
}