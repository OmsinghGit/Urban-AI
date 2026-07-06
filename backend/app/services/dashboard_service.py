from app.clients.aqicn_client import AQICNClient
from app.clients.weather_client import WeatherClient
from fastapi import HTTPException
from app.services.ai_summary_service import AISummaryService

class DashboardService:

    @staticmethod
    async def get_live_dashboard(city: str):

        try:
            waqi = await AQICNClient.get_city(city)
            weather = await WeatherClient.get_city(city)

        except Exception:
            raise HTTPException(
                status_code=404,
                detail=f"City '{city}' not found."
    )

        waqi_data = waqi["data"]

        aqi = waqi_data["aqi"]

        pm25 = waqi_data["iaqi"].get("pm25", {}).get("v", "-")

        temperature = round(weather["main"]["temp"])
        humidity = weather["main"]["humidity"]
        wind = weather["wind"]["speed"]
        weather_condition = weather["weather"][0]["main"]

        if aqi <= 50:
            risk = "Good"
        elif aqi <= 100:
            risk = "Moderate"
        elif aqi <= 150:
            risk = "Unhealthy for Sensitive"
        elif aqi <= 200:
            risk = "Unhealthy"
        elif aqi <= 300:
            risk = "Very Unhealthy"
        else:
            risk = "Hazardous"

        return {
            "stats": [
                {
                    "title": "Current AQI",
                    "value": str(aqi),
                    "subtitle": risk,
                },
                {
                    "title": "PM2.5",
                    "value": f"{pm25} µg/m³",
                    "subtitle": "Live Sensor",
                },
                {
                    "title": "Temperature",
                    "value": f"{temperature}°C",
                    "subtitle": weather_condition,
                },
                {
                    "title": "Risk Level",
                    "value": risk,
                    "subtitle": "Real-Time Assessment",
                },
            ],
            "city": weather["name"],
            "weather": {
                "temperature": temperature,
                "humidity": humidity,
                "wind": wind,
                "condition": weather_condition,
            },
            "aqiTrend": [
    {
        "time": "6 AM",
        "aqi": max(aqi - 60, 40),
    },
    {
        "time": "9 AM",
        "aqi": max(aqi - 35, 50),
    },
    {
        "time": "12 PM",
        "aqi": max(aqi - 15, 60),
    },
    {
        "time": "3 PM",
        "aqi": aqi,
    },
    {
        "time": "6 PM",
        "aqi": max(aqi - 10, 50),
    },
    {
        "time": "9 PM",
        "aqi": max(aqi - 25, 40),
    },
],
            "summary": AISummaryService.generate(
                aqi=aqi,
                pm25=pm25,
                temperature=temperature,
                humidity=humidity,
                condition=weather_condition,
                risk=risk,
            ),
        }