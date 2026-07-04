from fastapi import APIRouter

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