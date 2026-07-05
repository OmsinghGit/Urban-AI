import httpx

from app.config.settings import AQICN_API_KEY


class AQICNClient:

    BASE_URL = "https://api.waqi.info/feed"

    @staticmethod
    async def get_city(city: str):

        url = f"{AQICNClient.BASE_URL}/{city}/"

        params = {
            "token": AQICN_API_KEY
        }

        async with httpx.AsyncClient(timeout=15) as client:

            response = await client.get(
                url,
                params=params
            )

            response.raise_for_status()

        data = response.json()

        if data.get("status") != "ok":
            raise ValueError("City not found")

        return data