from fastapi import APIRouter
from fastapi import Query

from app.services.dashboard_service import DashboardService
from app.clients.weather_client import WeatherClient

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get("/")
def get_dashboard():
    return {
        "stats": [
            {
                "title": "Current AQI",
                "value": "168",
                "subtitle": "Unhealthy",
            },
            {
                "title": "PM2.5",
                "value": "94 µg/m³",
                "subtitle": "Above Safe Limit",
            },
            {
                "title": "Temperature",
                "value": "34°C",
                "subtitle": "Feels Like 38°C",
            },
            {
                "title": "Risk Level",
                "value": "High",
                "subtitle": "Immediate Attention",
            },
        ],
        "aqiTrend": [
            {"time": "6 AM", "aqi": 92},
            {"time": "9 AM", "aqi": 118},
            {"time": "12 PM", "aqi": 142},
            {"time": "3 PM", "aqi": 168},
            {"time": "6 PM", "aqi": 155},
            {"time": "9 PM", "aqi": 130},
        ],
    }

@router.get("/live")
async def get_live_dashboard(
    city: str = Query(default="Delhi")
):
    return await DashboardService.get_live_dashboard(city)


@router.get("/weather")
async def get_weather():
    return await WeatherClient.get_city("Delhi")