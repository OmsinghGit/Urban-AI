import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export async function getReport(
  city = "Delhi"
) {
  const response = await api.get("/report", {
    params: { city },
  });

  return response.data;
}