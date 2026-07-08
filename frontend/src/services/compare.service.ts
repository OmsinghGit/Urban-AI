import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function compareCities(
  city1: string,
  city2: string
) {
  const response = await api.get("/compare", {
    params: {
      city1,
      city2,
    },
  });

  return response.data;
}