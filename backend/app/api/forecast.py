from fastapi import APIRouter, Query

from app.services.forecast_service import ForecastService

router = APIRouter(
    prefix="/forecast",
    tags=["Forecast"],
)


@router.get("/")
async def get_forecast(
    city: str = Query(default="Delhi"),
):
    return await ForecastService.get_forecast(city)