import httpx

from app.config.settings import OPENWEATHER_API_KEY


class WeatherClient:

    BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

    @staticmethod
    async def get_city(city: str):

        params = {
            "q": city,
            "appid": OPENWEATHER_API_KEY,
            "units": "metric",
        }

        async with httpx.AsyncClient(timeout=15) as client:

            response = await client.get(
                WeatherClient.BASE_URL,
                params=params,
            )

            response.raise_for_status()

            return response.json()