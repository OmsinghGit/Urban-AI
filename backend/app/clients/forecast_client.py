import httpx

from app.config.settings import OPENWEATHER_API_KEY


class ForecastClient:

    BASE_URL = "https://api.openweathermap.org/data/2.5/forecast"

    @staticmethod
    async def get_forecast(city: str):

        async with httpx.AsyncClient(timeout=15) as client:

            response = await client.get(
                ForecastClient.BASE_URL,
                params={
                    "q": city,
                    "appid": OPENWEATHER_API_KEY,
                    "units": "metric",
                },
            )

            response.raise_for_status()

            return response.json()