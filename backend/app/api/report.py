from fastapi import APIRouter, Query

from app.services.dashboard_service import DashboardService

router = APIRouter(
    prefix="/report",
    tags=["Reports"],
)


@router.get("/")
async def get_report(
    city: str = Query(default="Delhi"),
):
    return await DashboardService.get_live_dashboard(city)