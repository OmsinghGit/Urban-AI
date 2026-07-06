from app.clients.forecast_client import ForecastClient


class ForecastService:

    @staticmethod
    async def get_forecast(city: str):

        data = await ForecastClient.get_forecast(city)

        forecast = []

        # OpenWeather returns data every 3 hours.
        # Taking every 8th item gives approximately one reading per day.
        for item in data["list"][::8]:

            forecast.append(
                {
                    "date": item["dt_txt"].split()[0],
                    "temperature": round(item["main"]["temp"]),
                    "humidity": item["main"]["humidity"],
                    "wind": item["wind"]["speed"],
                    "condition": item["weather"][0]["main"],
                    "icon": item["weather"][0]["icon"],
                }
            )

        return forecast